const { v4: uuidv4 } = require('uuid');
const localStorage = require('../config/local-storage');
const { getGalleriesByPage, getMoviesByIds } = require('../config/db');

class MyListController {
  constructor() {
    this.storageKey = 'movieAppMyList';
  }

  // Helper methods
  _getMyListIds = () => {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : {};
  }

  _saveMyListIds = (data) => {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // CRUD Operations
  getMyListIds = (userId) => {
    const allLists = this._getMyListIds();
    return allLists[userId] || [];
  }

  getMyListGalleries = (req, res) => {
    const { userId } = req.params;
    const pageGalleries = getGalleriesByPage('myList');
    const allLists = this.getMyListIds(userId);
    
    const formattedGalleries = pageGalleries.map(
        gallery => ({
            ...gallery,
            movie_ids: allLists,
            movies: getMoviesByIds(this.getMyListIds(userId))
        })
    )
    
    res.json(formattedGalleries);
  }

  toggleMovie = (userId, movieId) => {
    const allLists = this._getMyListIds();
    const userList = allLists[userId] || [];

    const newList = new Set(userList);
    if (newList.has(movieId)) {
      newList.delete(movieId);
    } else {
      newList.add(movieId);
    }

    allLists[userId] = [...newList];
    this._saveMyListIds(allLists);
    return [...newList];
  }

  hasMovie = (userId, movieId) => {
    const userList = this.getMyListIds(userId);
    return new Set(userList).has(movieId);
  }

  clearMyList = (userId) => {
    const allLists = this._getMyListIds();
    delete allLists[userId];
    this._saveMyListIds(allLists);
    return [];
  }
}

module.exports = new MyListController();
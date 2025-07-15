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
  getMyListIds = async (req, res) => {
    try {
      const { userId } = req.params;
      const allLists = this._getMyListIds();
      res.status(200).json({ success: true, ids: allLists[userId] || [] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  getMyListGalleries = async (req, res) => {
    try {
      const { userId } = req.params;
      const allLists = this._getMyListIds();
      const userList = allLists[userId] || [];
      const movies = getMoviesByIds(userList);

      const pageGalleries = getGalleriesByPage('myList');
      
      pageGalleries[0].movie_ids=userList;
      pageGalleries[0].movies=movies;

      res.status(200).json(pageGalleries);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  toggleMovie = (req, res) => {
    try {
      const { userId } = req.params;
      const { movieId } = req.body;

      if (!movieId) {
        return res.status(400).json({ success: false, message: 'movieId is required' });
      }

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
      res.status(200).json({ success: true, ids: [...newList] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  hasMovie = (req, res) => {
    try {
      const { userId, movieId } = req.params;
      const allLists = this._getMyListIds();
      const userList = allLists[userId] || [];
      
      res.status(200).json({ success: true, has: userList.includes(movieId) });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  clearMyList = (req, res) => {
    try {
      const { userId } = req.params;
      const allLists = this._getMyListIds();
      delete allLists[userId];
      this._saveMyListIds(allLists);
      res.status(200).json({ ids: [] });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new MyListController();
const { v4: uuidv4 } = require('uuid');
const localStorage = require('../config/local-storage');

class MyListController {
  constructor() {
    this.storageKey = 'movieAppMyList';
  }

  // Helper methods
  _getAllLists() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : {};
  }

  _saveAllLists(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // CRUD Operations
  getMyList(userId) {
    const allLists = this._getAllLists();
    return allLists[userId] || [];
  }

  toggleMovie(userId, movieId) {
    const allLists = this._getAllLists();
    const userList = allLists[userId] || [];

    const newList = new Set(userList);
    if (newList.has(movieId)) {
      newList.delete(movieId);
    } else {
      newList.add(movieId);
    }

    allLists[userId] = [...newList];
    this._saveAllLists(allLists);
    console.log(allLists)
    return [...newList];
  }

  hasMovie(userId, movieId) {
    const userList = this.getMyList(userId);
    return new Set(userList).has(movieId);
  }

  clearMyList(userId) {
    const allLists = this._getAllLists();
    delete allLists[userId];
    this._saveAllLists(allLists);
    return [];
  }
}

module.exports = new MyListController();
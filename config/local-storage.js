const { LocalStorage } = require('node-localstorage');
const path = require('path');

// Buat direktori penyimpanan jika belum ada
const storagePath = path.resolve(__dirname, '../localStorage');
const localStorage = new LocalStorage(storagePath);

module.exports = localStorage;
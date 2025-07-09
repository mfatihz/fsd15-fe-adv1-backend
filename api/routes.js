const express = require('express');
const router = express.Router();

const { getGalleriesByPage } = require('../controllers/gallery.controller');
const { getHeroByPage } = require('../controllers/hero.controller');
const { getEpisodesGallery } = require('../controllers/episode.controller');

// const { addToMyList, getMyList, removeFromMyList } = require('../controllers/mylist.controller');
// const { getAllMovies } = require('../controllers/movieController');

// Main Pages routes
router.get('/hero/:page', getHeroByPage);
router.get('/galleries/:page', getGalleriesByPage);

// Popup Pages routes
router.get('/series/:id/episodes', getEpisodesGallery);

// Movie routes
// router.get('/movies', getAllMovies);

// MyList routes
// router.get('/mylist/:userId', getMyList);
// router.post('/mylist/:userId', addToMyList);
// router.delete('/mylist/:userId/:movieId', removeFromMyList);

module.exports = router;
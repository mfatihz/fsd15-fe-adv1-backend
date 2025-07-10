const express = require('express');
const router = express.Router();

const { getGalleriesByPage } = require('../controllers/gallery.controller');
const { getHeroByPage } = require('../controllers/hero.controller');
const { getEpisodesGallery } = require('../controllers/episode.controller');
const myListController = require('../controllers/mylist.controller');

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

router.get('/mylist/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ ids: myListController.getMyList(userId) });
});

router.post('/mylist/:userId/toggle', (req, res) => {
  const { userId } = req.params;
  const { movieId } = req.body;
  res.json({ ids: myListController.toggleMovie(userId, movieId) });
});

router.get('/mylist/:userId/has/:movieId', (req, res) => {
  const { userId, movieId } = req.params;
  res.json({ has: myListController.hasMovie(userId, movieId) });
});

router.delete('/mylist/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ ids: myListController.clearMyList(userId) });
});


module.exports = router;
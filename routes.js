const express = require('express');
const router = express.Router();

const { getGalleriesByPage } = require('./controllers/gallery.controller');
const { getHeroByPage } = require('./controllers/hero.controller');
const { getEpisodesGallery } = require('./controllers/episode.controller');
const myListController = require('./controllers/mylist.controller');

// Main pages routes
router.get('/hero/:page', getHeroByPage);
router.get('/galleries/:page', getGalleriesByPage);

// Popup pages routes
router.get('/series/:id/episodes', getEpisodesGallery);

// MyList page routes
router.get('/mylist/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ ids: myListController.getMyList(userId) });
});

router.put('/mylist/:userId/toggle', (req, res) => {
  const { userId } = req.params;
  const { movieId } = req.body;
  res.json({ ids: myListController.toggleMovie(userId, movieId) });
});

router.get('/mylist/:userId/:movieId', (req, res) => {
  const { userId, movieId } = req.params;
  res.json({ has: myListController.hasMovie(userId, movieId) });
});

// belum diimplementasikan. butuh UI pendukung
router.delete('/mylist/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ ids: myListController.clearMyList(userId) });
});

module.exports = router;
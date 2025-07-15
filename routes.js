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
router.get('/mylist/:userId', myListController.getMyListIds);
router.get('/mylist/:userId/galleries', myListController.getMyListGalleries);
router.put('/mylist/:userId/toggle', myListController.toggleMovie);
router.get('/mylist/:userId/has/:movieId', myListController.hasMovie);

// belum diimplementasikan. UI pendukung 
// router.delete('/mylist/:userId', (req, res) => {
//   const { userId } = req.params;
//   res.json({ ids: myListController.clearMyList(userId) });
// });
router.delete('/mylist/:userId', myListController.clearMyList);

module.exports = router;
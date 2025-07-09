const { getEpisodesByParentId } = require('../config/db');

exports.getEpisodesGallery = (req, res) => {
    const { id } = req.params;
    const episodes = getEpisodesByParentId(id);

    // diformat menjadi data gallery
    const gallery = {
        title: "Episode",
        movies: episodes,
    }

    res.json(gallery);

}
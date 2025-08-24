const { getEpisodesByParentId } = require('../config/db');

exports.getEpisodesGallery = (req, res) => {
    try {
        const { id } = req.params;    
        if (!id) {
            return res.status(400).json({ error: 'ID parameter is required' });
        }

        const episodes = getEpisodesByParentId(id);
        if (!episodes || episodes.length === 0) {
            return res.status(404).json({ error: 'No episodes found for the given ID' });
        }

        // diformat menjadi data gallery
        const gallery = {
            title: "Episode",
            movies: episodes,
        }

        res.status(200).json(gallery);
    } catch (error) {
        console.error('Error fetching episodes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
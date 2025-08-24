const { getGalleriesByPage, getMoviesByIds } = require('../config/db');

exports.getGalleriesByPage = (req, res) => {
    try {
        const { page } = req.params;
        if (!page) {
            return res.status(400).json({ 
                error: 'Page parameter is required'
            });
        }

        // Dapatkan galleries berdasarkan page
        const pageGalleries = getGalleriesByPage(page);
        if (!pageGalleries || !Array.isArray(pageGalleries)) {
            return res.status(500).json({ 
                error: 'Failed to retrieve galleries data'
            });
        }

        // Proses setiap gallery
        const galleriesWithMovieDetail = pageGalleries.map(
            gallery => ({
                ...gallery,
                // title: gallery.title[page],
                movies: getMoviesByIds(gallery.movie_ids).filter(
                    movie => (page === 'movies' || page === 'series')
                        ? movie.type === page
                        : true
                )
            })
        )

        res.status(200).json(galleriesWithMovieDetail);
    } catch (error) {
        console.error('Unexpected error in gallery controller:', error);
        res.status(500).json({ 
            error: 'Internal server error'
        });
    }
}
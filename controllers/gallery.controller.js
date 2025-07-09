const { getGalleriesByPage, getMoviesByIds } = require('../config/db');

exports.getGalleriesByPage = (req, res) => {
    const { page } = req.params;

    const pageGalleries = getGalleriesByPage(page);

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

    res.json(galleriesWithMovieDetail);
}
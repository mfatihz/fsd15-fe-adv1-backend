const episodesDB = require("./data/episodes.data");
const galleriesDB = require("./data/galleries.data");
const heroesDB = require("./data/heroes.data");
const moviesDB = require("./data/movies.data");

const database = {
    movies: moviesDB,
    episodes: episodesDB,
    galleries: galleriesDB,
    heroes: heroesDB
};

const getMovieById = (movieId) => {
    return database.movies.find(movie => movie.id === movieId);
};

const getMoviesByIds = (movieIds) => {
    return movieIds.map(id => database.movies.find(movie => movie.id === id)).filter(Boolean);
};

const getGalleriesByPage = (page) => {
    const galleries = database.galleries
        .filter(gallery => gallery.pages.includes(page))
        
    const formattedGalleries = galleries.map(
        gallery => ({
            ...gallery,
            title: gallery.title[page]
        })
    )

    return formattedGalleries;
}

const getEpisodesByParentId = (parentId) => {
    return database.episodes.filter(episode => JSON.stringify(episode.parent) === parentId);
};

module.exports = {
    database,
    getMovieById,
    getMoviesByIds,
    getGalleriesByPage,
    getEpisodesByParentId
};
const { database, getMovieById } = require('../config/db');

exports.getHeroByPage = (req, res) => {
    const { page } = req.params;

    const heroId = database.heroes[page];

    const heroMovie = getMovieById(heroId);

    res.json(heroMovie);
}
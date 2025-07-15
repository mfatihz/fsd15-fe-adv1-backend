const { database, getMovieById } = require('../config/db');

exports.getHeroByPage = (req, res) => {
    try {    
        const { page } = req.params;
        if (!page) {
            return res.status(400).json({ 
                error: 'Page parameter is required'
            });
        }

        const heroId = database.heroes[page];
        if (!heroId) {
            return res.status(404).json({
                error: 'Hero content not available'
            });
        }
        
        const heroMovie = getMovieById(heroId);
        res.status(200).json(heroMovie);
        
    } catch (error) {
        console.error('Error in hero controller:', error);
        
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}
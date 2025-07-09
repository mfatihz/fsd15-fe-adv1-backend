// const { v4: uuidv4 } = require('uuid');

// const key = 'chillMyList';

// const getAllData = () => {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : [];
// }

// const saveData = (data) => {
//     localStorage.setItem(key, JSON.stringify(data))
// }

// exports.getMyList = (req, res) => {
//   const { userId } = req.params;

//   const allData = getAllData();
//   const myData = allData.find(data => data.user_id === userId) || {user_id: userId, movie: []};

//   res.json(myData);
// };

// exports.addToMyList = (req, res) => {
//     const { userId } = req.params;
//     const { movie } = req.body;

//     const allData = getAllData();
//     // dapatkan current user
//     let userData = allData.find(data => data.user_id === userId);

//     // Create user jika belum ada
//     if (!userData) {
//         userData = {
//             user_id: userId,
//             movie: [],
//             id: uuidv4()
//         };
//         allData.push(userId);
//     }

//     const isMovieExists = userData.movies.find(m => m === movie);
//     if (isMovieExists) {
//         return res.status(400).json({error: 'Movie already in your list'});
//     }

//     userData.movies.push(movie);
//     saveData(allData);

//     res.status(201).json(userData);
// };

// exports.removeFromMyList = (req, res) => {
//     const { userId, movieId } = req.params;
//     const allData = getAllData();
//     const userData = allData.find(data => data.user_id === userId);
//     if (!userData) {
//         return res.status(400).json({error: 'User not found'});
//     }

//     userData.movies = userData.movies.filter(movie => movie !== movieId);
//     saveData(allData);

//     res.json(userData);
// }
const galleriesDB = [
    {
        id: 0,
        title: { home: "Melanjutkan Tonton Film", series: "Melanjutkan Tonton Series", movies: "Melanjutkan Tonton Film" },
        gallery_type: "continue",
        pages: ['home', 'movies', 'series'],
        movie_ids: [25, 2, 6, 18, 26, 16, 1, 11, 22, 12, 3, 17,],
    },
    {
        id: 1,
        title: { series: "Series Persembahan Chill", movies: "Film Persembahan Chill" },
        gallery_type: "",
        pages: ['movies', 'series'],
        movie_ids: [7, 0, 1, 2, 25, 3, 4, 5, 24, 6, 18, 26, 16,],
    },
    {
        id: 2,
        title: { home: "Top Rating Film Hari Ini", series: "Top Rating Series Hari Ini", movies: "Top Rating Film Hari Ini" },
        gallery_type: "",
        pages: ['home', 'movies', 'series'],
        movie_ids: [2, 25, 7, 24, 26],
    },
    {
        id: 3,
        title: { home: "Film Trending", series: "Series Trending", movies: "Film Trending" },
        gallery_type: "",
        pages: ['home', 'movies', 'series'],
        movie_ids: [7, 0, 1, 2, 25, 3, 4, 5, 24, 6, 17, 8, 26, 9, 10, 11, 14],
    },
    {
        id: 4,
        title: { home: "Rilis Baru", series: "Rilis Baru", movies: "Rilis Baru" },
        gallery_type: "",
        pages: ['home', 'movies', 'series'],
        movie_ids: [12, 13, 8, 14, 15, 0, 16, 17, 18, 6, 19, 20, 21, 9, 22, 23,],
    },
    {
        id: 5,
        title: { recommendation: "Rekomendasi Serupa" },
        gallery_type: "",
        pages: ['recommendation'],
        movie_ids: [25, 2, 23, 18,],
    },
    {
        id: 6,
        title: { myList: "Daftar Saya" },
        gallery_type: "",
        pages: ['myList'],
        movie_ids: [],
    },
]

module.exports = galleriesDB;
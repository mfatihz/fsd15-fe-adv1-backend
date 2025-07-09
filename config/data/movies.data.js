const moviesDB = [
    {
        "id": 0,
        "parent": null,
        "title": "My Hero Academia",
        "type": "series",
        "yearRelease": 2023,
        "cast": "My, Hero, Academia, Dan, Lain, Lain2",
        "director": "M. Hero",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "",
        "episodes": 11,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/academia.svg",
            "landscape": "/images/poster-landscape/academia.svg"
        },
        "summary": `[very-long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent. 
        Eleifend quisque ad suspendisse senectus cursus inceptos varius risus habitasse, ac dignissim odio orci viverra curae molestie nibh commodo suscipit, cras per curabitur vivamus vel habitant magna eros. 
        Himenaeos cursus arcu parturient aliquet mattis magnis, habitant rhoncus sapien fringilla bibendum risus, elementum ultrices donec justo porta. 
        Iaculis libero tempus metus varius bibendum ut suscipit sollicitudin, molestie congue egestas id felis curabitur leo, penatibus ridiculus cubilia rutrum posuere interdum pellentesque. 
        Accumsan odio penatibus aenean tempus volutpat porttitor hac etiam imperdiet, potenti leo eget aliquam conubia vel rutrum himenaeos nascetur, class dictumst dictum sem quis inceptos in faucibus.`
    },
    {
        "id": 1,
        "parent": null,
        "title": "Alice in Borderland",
        "type": "series",
        "yearRelease": 2023,
        "cast": "Alice, In, Borderland, Dan, Lain, Lain2",
        "director": "Alice",
        "genres": ["series", "series", "anime"],
        "badges": ["new"],
        "duration": "",
        "episodes": 7,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/alice-border.svg",
            "landscape": "/images/poster-landscape/alice-border.svg"
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 2,
        "parent": null,
        "title": "All of Us are Dead",
        "type": "series",
        "yearRelease": 2023,
        "cast": "All, Of, Us, Are, Dead, Dan, Lain, Lain2",
        "director": "US Dead",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["top"],
        "duration": "",
        "episodes": 13,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/all-us-dead.svg",
            "landscape": "/images/poster-landscape/all-us-dead.svg"
        },
        "summary": `[medium] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent.`
    },
    {
        "id": 3,
        "parent": null,
        "title": "Avatar 3",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Avatar, Tiga, Dan, Lain, Lain2",
        "director": "Ava",
        "genres": ["movie", "series", "anime"],
        "badges": ["top"],
        "duration": "2.30",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "/images/hero/avatar.svg",
            "portrait": "/images/poster-portrait/avatar.svg",
            "landscape": "/images/poster-landscape/avatar.svg"
        },
        "summary": `"Avatar 3" melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.`
    },
    {
        "id": 4,
        "parent": null,
        "title": "Batman",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Bat, Man, Dan, Lain, Lain2",
        "director": "Bat",
        "genres": ["movie", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "2.11",
        "episodes": "",
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/batman.svg",
            "landscape": "/images/poster-landscape/batman.svg"
        },
        "summary": `[very-short] Lorem ipsum dolor sit amet.`
    },
    {
        "id": 5,
        "parent": null,
        "title": "Baymax",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Bay, max, Dan, Lain, Lain2",
        "director": "Bay",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["top"],
        "duration": "1.40",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/baymax.svg",
            "landscape": "/images/poster-landscape/baymax.svg"
        },
        "summary": `[very-long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent. 
        Eleifend quisque ad suspendisse senectus cursus inceptos varius risus habitasse, ac dignissim odio orci viverra curae molestie nibh commodo suscipit, cras per curabitur vivamus vel habitant magna eros. 
        Himenaeos cursus arcu parturient aliquet mattis magnis, habitant rhoncus sapien fringilla bibendum risus, elementum ultrices donec justo porta. 
        Iaculis libero tempus metus varius bibendum ut suscipit sollicitudin, molestie congue egestas id felis curabitur leo, penatibus ridiculus cubilia rutrum posuere interdum pellentesque. 
        Accumsan odio penatibus aenean tempus volutpat porttitor hac etiam imperdiet, potenti leo eget aliquam conubia vel rutrum himenaeos nascetur, class dictumst dictum sem quis inceptos in faucibus.`
    },
    {
        "id": 6,
        "parent": null,
        "title": "Big Hero 6",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Big, Hero, Dan, Lain, Lain2",
        "director": "Big 6",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "1.20",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/big-hero-6.svg",
            "landscape": "/images/poster-landscape/big-hero-6.svg"
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 7,
        "parent": null,
        "title": "Blue Lock",
        "type": "series",
        "yearRelease": 2023,
        "cast": "Blue, Lock, Dan, Lain, Lain2",
        "director": "Look Blue",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["new", "top"],
        "duration": "",
        "episodes": 30,
        "contentRating": "G",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/blue-lock.svg",
            "landscape": "/images/poster-landscape/blue-lock.svg"
        },
        "summary": `[medium] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent.`
    },
    {
        "id": 8,
        "parent": null,
        "title": "Dilan",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Di, Lan, Andil, Dan, Lain, Lain2",
        "director": "Linda",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "2.12",
        "episodes": null,
        "contentRating": "PG",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/dilan.svg",
            "landscape": "/images/poster-landscape/dilan.svg"
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 9,
        "parent": null,
        "title": "Don't Look Up",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Dono, Look, Up, Dan, Lain, Lain2",
        "director": "Dono",
        "genres": ["movies", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.55",
        "episodes": "",
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/dont-look-up.svg",
            "landscape": "/images/poster-landscape/dont-look-up.svg"
        },
        "summary": `[very-short] Lorem ipsum dolor sit amet.`
    },
    {
        "id": 10,
        "parent": null,
        "title": "Duty after School",
        "type": "series",
        "yearRelease": 2023,
        "cast": "Duty, After, School, Dan, Lain, Lain2",
        "director": "DA School",
        "genres": ["series", "action", "drama", "fantasy"],
        "badges": ["new", "top"],
        "duration": "",
        "episodes": 21,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "/images/hero/duty-after-school.svg",
            "portrait": "/images/poster-portrait/duty-after-school.svg",
            "landscape": "/images/poster-landscape/duty-after-school.svg"
        },
        "summary": "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
    },
    {
        "id": 11,
        "parent": null,
        "title": "Fast X",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Fast, Ten, Dan, Lain, Lain2",
        "director": "X",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.09",
        "episodes": null,
        "contentRating": "NR",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/fast.svg",
            "landscape": "/images/poster-landscape/fast.svg"
        },
        "summary": `[very-long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent. 
        Eleifend quisque ad suspendisse senectus cursus inceptos varius risus habitasse, ac dignissim odio orci viverra curae molestie nibh commodo suscipit, cras per curabitur vivamus vel habitant magna eros. 
        Himenaeos cursus arcu parturient aliquet mattis magnis, habitant rhoncus sapien fringilla bibendum risus, elementum ultrices donec justo porta. 
        Iaculis libero tempus metus varius bibendum ut suscipit sollicitudin, molestie congue egestas id felis curabitur leo, penatibus ridiculus cubilia rutrum posuere interdum pellentesque. 
        Accumsan odio penatibus aenean tempus volutpat porttitor hac etiam imperdiet, potenti leo eget aliquam conubia vel rutrum himenaeos nascetur, class dictumst dictum sem quis inceptos in faucibus.`
    },
    {
        "id": 12,
        "parent": null,
        "title": "Guardians of the Galaxy",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Guardian, Galaxy, Dan, Lain, Lain2",
        "director": "Galaxy",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.23",
        "episodes": null,
        "contentRating": "PG",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/guardian-galaxy.svg",
            "landscape": "/images/poster-landscape/guardian-galaxy.svg"
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 13,
        "parent": null,
        "title": "Happiness",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Happiness, Dan, Lain, Lain2",
        "director": "Happy",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "1.45",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "/images/hero/happiness.svg",
            "portrait": "/images/poster-portrait/happiness.svg",
            "landscape": "/images/poster-landscape/happiness.svg"
        },
        "summary": `Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.`
    },
    {
        "id": 14,
        "parent": null,
        "title": "Jurassic World",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Jurrasic, World, Dan, Lain, Lain2",
        "director": "Jurrasic",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "2.15",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/jurassic.svg",
            "landscape": "/images/poster-landscape/jurassic.svg"
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 15,
        "parent": null,
        "title": "Megan",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Megan, Dan, Lain, Lain2",
        "director": "aMeng",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.12",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/megan.svg",
            "landscape": "/images/poster-landscape/megan.svg"
        },
        "summary": `[very-short] Lorem ipsum dolor sit amet.`
    },
    {
        "id": 16,
        "parent": null,
        "title": "The Little Mermaid",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Little, Mermaid, Dan, Lain, Lain2",
        "director": "Mermaid",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "1.32",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/mermaid.svg",
            "landscape": "/images/poster-landscape/mermaid.svg"
        },
        "summary": `[very-long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent. 
        Eleifend quisque ad suspendisse senectus cursus inceptos varius risus habitasse, ac dignissim odio orci viverra curae molestie nibh commodo suscipit, cras per curabitur vivamus vel habitant magna eros. 
        Himenaeos cursus arcu parturient aliquet mattis magnis, habitant rhoncus sapien fringilla bibendum risus, elementum ultrices donec justo porta. 
        Iaculis libero tempus metus varius bibendum ut suscipit sollicitudin, molestie congue egestas id felis curabitur leo, penatibus ridiculus cubilia rutrum posuere interdum pellentesque. 
        Accumsan odio penatibus aenean tempus volutpat porttitor hac etiam imperdiet, potenti leo eget aliquam conubia vel rutrum himenaeos nascetur, class dictumst dictum sem quis inceptos in faucibus.`
    },
    {
        "id": 17,
        "parent": null,
        "title": "Missing",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Miss Ing, Dan, Lain, Lain2",
        "director": "Ing",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.11",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/missing.svg",
            "landscape": "/images/poster-landscape/missing.svg"
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 18,
        "parent": null,
        "title": "A Man Called Otto",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Aman, Called, Otto, Dan, Lain, Lain2",
        "director": "Aman & Otto",
        "genres": ["movies", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "",
        "episodes": 19,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/otto.svg",
            "landscape": "/images/poster-landscape/otto.svg"
        },
        "summary": `[medium] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent.`
    },
    {
        "id": 19,
        "parent": null,
        "title": "Quantumania",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Q, Dan, Lain, Lain2",
        "director": "Quant",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.33",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/quantumania.svg",
            "landscape": "/images/poster-landscape/quantumania.svg"
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 20,
        "parent": null,
        "title": "Rio",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Rio, de, Jeneiro, Dan, Lain, Lain2",
        "director": "Rio",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.50",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/rio.svg",
            "landscape": "/images/poster-landscape/rio.svg"
        },
        "summary": `[very-short] Lorem ipsum dolor sit amet.`
    },
    {
        "id": 21,
        "parent": null,
        "title": "Shazam",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Shazma, Dan, Lain, Lain2",
        "director": "Szham",
        "genres": ["movies", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "2.34",
        "episodes": "",
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/shazam.svg",
            "landscape": "/images/poster-landscape/shazam.svg"
        },
        "summary": `[very-long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent. 
        Eleifend quisque ad suspendisse senectus cursus inceptos varius risus habitasse, ac dignissim odio orci viverra curae molestie nibh commodo suscipit, cras per curabitur vivamus vel habitant magna eros. 
        Himenaeos cursus arcu parturient aliquet mattis magnis, habitant rhoncus sapien fringilla bibendum risus, elementum ultrices donec justo porta. 
        Iaculis libero tempus metus varius bibendum ut suscipit sollicitudin, molestie congue egestas id felis curabitur leo, penatibus ridiculus cubilia rutrum posuere interdum pellentesque. 
        Accumsan odio penatibus aenean tempus volutpat porttitor hac etiam imperdiet, potenti leo eget aliquam conubia vel rutrum himenaeos nascetur, class dictumst dictum sem quis inceptos in faucibus.`
    },
    {
        "id": 22,
        "parent": null,
        "title": "Sonic 2",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Sonic, Two, Dan, Lain, Lain2",
        "director": "Son",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.42",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/sonic-2.svg",
            "landscape": "/images/poster-landscape/sonic-2.svg"
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 23,
        "parent": null,
        "title": "Spiderman",
        "type": "series",
        "yearRelease": 2023,
        "cast": "Spider, Man, Dan, Lain, Lain2",
        "director": "Spider",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "",
        "episodes": 17,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/spiderman.svg",
            "landscape": "/images/poster-landscape/spiderman.svg"
        },
        "summary": `[medium] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent.`
    },
    {
        "id": 24,
        "parent": null,
        "title": "The Little Stuart",
        "type": "series",
        "yearRelease": 2023,
        "cast": "The, Little Suart, Dan, Lain, Lain2",
        "director": "Stuart Little",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": ["new"],
        "duration": "",
        "episodes": 16,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/stuart.svg",
            "landscape": "/images/poster-landscape/stuart.svg"
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 25,
        "parent": null,
        "title": "Suzume",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Suzu, Me, Dan, Lain, Lain2",
        "director": "Me",
        "genres": ["movie", "series", "anime"],
        "badges": ["new", "top"],
        "duration": "0.45",
        "episodes": null,
        "contentRating": "PG",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/suzume.svg",
            "landscape": "/images/poster-landscape/suzume.svg"
        },
        "summary": "Ringkasan belum tersedia"
    },
    {
        "id": 26,
        "parent": null,
        "title": "The Tomorrow War",
        "type": "movies",
        "yearRelease": 2023,
        "cast": "Tom, War, Dan, Lain, Lain2",
        "director": "Tom",
        "genres": ["series", "action", "sci-fi", "drama", "romance"],
        "badges": [],
        "duration": "1.56",
        "episodes": null,
        "contentRating": "18+",
        "userRating": 4.7,
        "images": {
            "hero": "",
            "portrait": "/images/poster-portrait/tom-war.svg",
            "landscape": "/images/poster-landscape/tom-war.svg"
        },
        "summary": `[very-short] Lorem ipsum dolor sit amet.`
    },
]

module.exports = moviesDB;
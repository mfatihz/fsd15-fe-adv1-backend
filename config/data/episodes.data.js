const episodesDB = [
    {
        "id": 0,
        "parent": 0,
        "episode": 1,
        "title": "My",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 1,
        "parent": 0,
        "episode": 2,
        "title": "Hero",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 2,
        "parent": 0,
        "episode": 3,
        "title": "Academia",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 3,
        "parent": 0,
        "episode": 4,
        "title": "My Hero",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 4,
        "parent": 0,
        "episode": 5,
        "title": "Hero Academia",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },

    {
        "id": 5,
        "parent": 1,
        "episode": 1,
        "title": "Alice",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 6,
        "parent": 1,
        "episode": 2,
        "title": "In",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 7,
        "parent": 1,
        "episode": 3,
        "title": "Borderland",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 8,
        "parent": 1,
        "episode": 4,
        "title": "Alice in",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 9,
        "parent": 1,
        "episode": 5,
        "title": "In Borderland",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },

    {
        "id": 10,
        "parent": 2,
        "episode": 1,
        "title": "All",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 11,
        "parent": 2,
        "episode": 2,
        "title": "Of",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 12,
        "parent": 2,
        "episode": 3,
        "title": "Us",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 13,
        "parent": 2,
        "episode": 4,
        "title": "Are",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 14,
        "parent": 2,
        "episode": 5,
        "title": "Dead",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 15,
        "parent": 2,
        "episode": 6,
        "title": "All of",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 16,
        "parent": 2,
        "episode": 7,
        "title": "Of Us",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 17,
        "parent": 2,
        "episode": 8,
        "title": "Us Are",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 18,
        "parent": 2,
        "episode": 9,
        "title": "Are Dead",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 19,
        "parent": 2,
        "episode": 10,
        "title": "Dead All",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },

    {
        "id": 20,
        "parent": 7,
        "episode": 1,
        "title": "Blue",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 21,
        "parent": 7,
        "episode": 2,
        "title": "Lock",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 22,
        "parent": 7,
        "episode": 3,
        "title": "Blue Lock",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 23,
        "parent": 7,
        "episode": 4,
        "title": "Lock Blue",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 24,
        "parent": 7,
        "episode": 5,
        "title": "Blue Blue",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },

    {
        "id": 25,
        "parent": 10,
        "episode": 1,
        "title": "Duty",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 26,
        "parent": 10,
        "episode": 2,
        "title": "After",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 27,
        "parent": 10,
        "episode": 3,
        "title": "School",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 28,
        "parent": 10,
        "episode": 4,
        "title": "Duty after",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 29,
        "parent": 10,
        "episode": 5,
        "title": "After School",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },

    {
        "id": 30,
        "parent": 23,
        "episode": 1,
        "title": "Spi",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },

    {
        "id": 31,
        "parent": 24,
        "episode": 1,
        "title": "The",
        "yearRelease": 2023,
        "duration": "0.30",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-1.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 32,
        "parent": 24,
        "episode": 2,
        "title": "Little",
        "yearRelease": 2023,
        "duration": "0.31",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-2.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 33,
        "parent": 24,
        "episode": 3,
        "title": "Stuart",
        "yearRelease": 2023,
        "duration": "0.33",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-3.svg",
        },
        "summary": `[long] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis. 
        Curae cursus turpis fames at dictum tempor nostra placerat ridiculus, maecenas neque quam egestas aliquet luctus a suspendisse, curabitur lacus platea habitant tristique faucibus augue torquent. 
        Quam lobortis laoreet dui massa ad montes primis ac, eget eleifend hac nulla turpis ridiculus risus in magnis, sagittis morbi nisi potenti sodales convallis torquent.`
    },
    {
        "id": 34,
        "parent": 24,
        "episode": 4,
        "title": "The Little",
        "yearRelease": 2023,
        "duration": "0.34",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-4.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
    {
        "id": 35,
        "parent": 24,
        "episode": 5,
        "title": "Little Stuart",
        "yearRelease": 2023,
        "duration": "0.35",
        "images": {
            "hero": "",
            "portrait": "",
            "landscape": "",
            "thumbnail": "/images/poster-thumbnail/ted-5.svg",
        },
        "summary": `[short] Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas donec vivamus aptent proin, erat odio risus mi leo penatibus sed aliquet nibh dis.`
    },
]

module.exports = episodesDB;
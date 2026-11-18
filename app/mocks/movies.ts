export const GENRES_MOCK = [
  {
    id: 35,
    name: 'Комедии'
  },
  {
    id: 18,
    name: 'Драмы'
  },
  {
    id: 14,
    name: 'Фэнтези'
  },
  {
    id: 53,
    name: 'Триллеры'
  },
  {
    id: 80,
    name: 'Детективы'
  }
]

export const MOVIES_MOCK = [
  {
    id: 100,
    title: 'The Super Mario Bros. Movie',
    vote_average: 7.5,
    genre_ids: [35, 14],
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 200,
    title: 'The Super Mario Bros. Movie',
    vote_average: 7.5,
    genre_ids: [35, 14],
    poster_path: '/images/mocks/movie-2.png'
  },
  {
    id: 300,
    title: 'The Super Mario Bros. Movie',
    vote_average: 7.5,
    genre_ids: [35, 14],
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 400,
    title: '65',
    vote_average: 6.3,
    genre_ids: [53],
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 500,
    title: '길복순',
    vote_average: 6.8,
    genre_ids: [80, 53],
    poster_path: '/images/mocks/movie-2.png'
  },
  {
    id: 600,
    title: '길복순',
    vote_average: 6.8,
    genre_ids: [80, 53],
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 700,
    title: '길복순',
    vote_average: 6.8,
    genre_ids: [80, 53],
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 800,
    title: 'Cocaine Bear',
    vote_average: 6.4,
    genre_ids: [53, 35],
    poster_path: '/images/mocks/movie-2.png'
  },
  {
    id: 900,
    title: 'John Wick: Chapter 4',
    vote_average: 8,
    genre_ids: [53, 80],
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 1000,
    title: 'John Wick: Chapter 3',
    vote_average: 8,
    genre_ids: [53, 80],
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 1100,
    title: 'John Wick: Chapter 2',
    vote_average: 8,
    genre_ids: [53, 80],
    poster_path: '/images/mocks/movie-2.png'
  },
  {
    id: 1200,
    title: 'Murder Mystery 2',
    vote_average: 6.6,
    genre_ids: [35],
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 1300,
    title: 'Creed III',
    vote_average: 7.3,
    genre_ids: [18, 14],
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 1400,
    title: 'Creed III',
    vote_average: 7.3,
    genre_ids: [18, 14],
    poster_path: '/images/mocks/movie-2.png'
  },
  {
    id: 1500,
    title: 'Creed III',
    vote_average: 7.3,
    genre_ids: [18, 14],
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 1600,
    title: 'Creed III',
    vote_average: 7.3,
    genre_ids: [18, 14],
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 1700,
    title: 'Avatar: The Way of Water',
    vote_average: 7.7,
    genre_ids: [18, 14],
    poster_path: '/images/mocks/movie-2.png'
  }
]

export const COLLECTIONS_MOCK = [
  {
    id: 'comics-lovers',
    title: 'Любителям комиксов',
    poster_path: '/images/mocks/movie-2.png'
  },
  {
    id: 'fantasy-classics',
    title: 'Классика фэнтези',
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 'japanese-animation',
    title: 'Японские мультфильмы',
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 'satirical-cartoons',
    title: 'Сатиристические мультсериалы',
    poster_path: '/images/mocks/movie-1.png'
  },
  {
    id: 'cyberpunk-dystopia',
    title: 'Киберпанк и антиутопии',
    poster_path: '/images/mocks/movie-3.png'
  },
  {
    id: 'cult-thrillers',
    title: 'Культовые триллеры',
    poster_path: '/images/mocks/movie-2.png'
  }
]

export const MOVIE_MOCK = {
  adult: false,
  backdrop_path: '/2w4xG178RpB4MDAIfTkqAuSJzec.jpg',
  belongs_to_collection: {
    id: 10,
    name: 'Star Wars Collection',
    poster_path: '/pWVLFh4OuejTpUaDQbB1C4zoS2p.jpg',
    backdrop_path: '/iY2ujEY2m68OTTlPFTiHub9joHS.jpg'
  },
  budget: 11000000,
  genres: [
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 878,
      name: 'Science Fiction'
    }
  ],
  homepage: 'http://www.starwars.com/films/star-wars-episode-iv-a-new-hope',
  id: 11,
  imdb_id: 'tt0076759',
  origin_country: ['US'],
  original_language: 'en',
  original_title: 'Star Wars',
  overview:
    'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
  popularity: 20.6912,
  poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
  production_companies: [
    {
      id: 1,
      logo_path: '/tlVSws0RvvtPBwViUyOFAO0vcQS.png',
      name: 'Lucasfilm Ltd.',
      origin_country: 'US'
    },
    {
      id: 25,
      logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
      name: '20th Century Fox',
      origin_country: 'US'
    }
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America'
    }
  ],
  release_date: '1977-05-25',
  revenue: 775398007,
  runtime: 121,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English'
    }
  ],
  status: 'Released',
  tagline: 'A long time ago in a galaxy far, far away...',
  title: 'Star Wars',
  video: false,
  vote_average: 8.2,
  vote_count: 22061
}

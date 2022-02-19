const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('один из просмотренных фильмов', '');
const b = prompt ('на сколько оцените его', '');
const c = prompt ('один из просмотренных фильмов', '');
const d = prompt ('на сколько оцените его', '');

peronalMovieDB.movies[a] = b;
peronalMovieDB.movies[c] = d;

console.log(peronalMovieDB);
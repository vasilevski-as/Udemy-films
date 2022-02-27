const numberOfFilms = prompt('сколько фильмов вы уже посмотрели', '');

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt ('один из просмотренных фильмов', ''),
          b = prompt ('на сколько оцените его', '');

    if (a != null && b != null && a !='' && b !='' && a.length < 50 ) {
        peronalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log ('error');
        i--;
        }
    }

    if (peronalMovieDB.count < 10){
        console.log('low');
    }
    else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30){
        console.log('norma');
    }
    else if (peronalMovieDB.count >= 30 ){
        console.log('kinoman');
    }
    else {console.log ('error');}

    function showFirstMes () {
        console.log('Hello Ukraine');
    }
        showFirstMes();
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
    }
}
start();

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

    function rememberMyFilms (){
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
    }

    // rememberMyFilms();

    function detectPersonalLevel() {
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
    }

// detectPersonalLevel();

function showMyDB (hiden) {
    if (!hiden){
        console.log (peronalMovieDB);  
    }
}
showMyDB(peronalMovieDB.privat);

function writeYourGenres (){
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`ваш любимый жанр номер ${i}`);
        peronalMovieDB.genres[i - 1] = genre;
    }

}
// writeYourGenres();
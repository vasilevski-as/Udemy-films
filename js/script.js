'use strict';

const peronalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        peronalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели', '');

        while (peronalMovieDB.count == '' || peronalMovieDB.count == null || isNaN (peronalMovieDB.count)) {
            peronalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function (hiden) {
        if (!hiden){
          console.log (peronalMovieDB);  
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр номер ${i}`);
            
        while (genre == '' || genre == null){
                genre = prompt(`ваш любимый жанр номер ${i}`);           
        }
            peronalMovieDB.genres[i - 1] = genre; 
        }
        peronalMovieDB.genres.forEach (function(item, i) {
            console.log( `Любимый жанр ${i+1} - это ${item} `);
        });
    },
    toggleVisibleMyDB: function(){
        if (peronalMovieDB.privat) {
            peronalMovieDB.privat = false;
        } else {
            peronalMovieDB.privat = true;
        }
    }
};
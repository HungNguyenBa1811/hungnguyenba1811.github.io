// Array
let listFilm = ['Silicon Valley', 'Batman', 'Harry Potter', ' Avenger: Endgame']
console.log(listFilm);

// CRUD
// Create
let film = 'Aquaman'
listFilm.push(film);

// Update
let updateFilm = 'Silicon Valley 2'
listFilm[0] = updateFilm;
console.log(updateFilm);

// Delete
listFilm.splice(1, 2, 'XYZ');
console.log(listFilm);

// Object
let movie = {
    title: 'Avenger: Endgame',
    year: 2012,
    rate: 8.4,
};
console.log(movie.title);
// or
console.log(movie['title']);

// Update
movie.rate = 8.7
console.log(movie)

// Delete
delete movie.title;

// Array of objects
let movie_1 = {
    title: 'Avenger: Endgame',
    year: 2012,
    rate: 8.4,
};
let movie_2 = {
    title: 'Batman',
    year: 2019,
    rate: 7,
};
let movie_3 = {
    title: 'Aquaman',
    year: 2017,
    rate: 8.7,
};
let movieArray = [];
movieArray.push(movie_1);
movieArray.push(movie_2);
movieArray.push(movie_3);
console.log(movieArray);
console.log(movieArray[2].title);

// Object containing array
let x = {
    title: 'Aquaman',
    year: 2017,
    rate: 8.7,
    character: ['X', 'Y', 'Z']
}
x.character.push('T');
console.log(x);
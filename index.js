const movies = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        genreTags: ['Suspense', 'Murder Mystery'],
        cast: [
            {
                name: 'Jimmy Stewart'
            },
            {
                name: 'Grace Kelly'
            }
        ]
    },
    {
        title: 'Vertigo',
        year: 1958,
        director: 'Alfred Hitchcock',
        genreTags: ['Suspsense'],
        cast: [
            {
                name: 'Jimmy Stewart',
            },
            {
                name: 'Kim Novak'
            }
        ]
    },
    {
        title: 'The Thing',
        year: 1982,
        director: 'John Carpenter',
        genreTags: ['Horror', 'Science Fiction', 'Creature Effects'],
        cast: [
            {
                name: 'Kurt Russell'
            },
            {
                name: 'Wilford Brimley'
            }
        ]
    },
    {
        title: 'Christine',
        year: 1983,
        director: 'John Carpenter',
        genreTags: ['Horror', 'Stephen King'],
        cast: [
            {
                name: 'Keith Gordon'
            },
            {
                name: 'John Stockwell'
            }
        ]
    }
];

/*
Create a function called getEightiesMovies that takes in an array of movie
objects. This function should use the native filter method to return a new
array of only the movies that were released in the 1980s.
*/

function getEightiesMovies(){

}

/*
Create a function called getFilmsByTitleLetter that takes in an array of
movie objects and a character of a letter. This function should use the
native filter method to return a new array of only the movie objects
whose title begins with the input string.
*/

function getFilmsByTitleLetter(){

}

/*
Create a function called getFilmsByActor that takes in an array of movie
objects and a string of an actor's name. This function should use the
native filter method to return a new array of only the movies who have the
input actor in their cast array.
*/

function getFilmsByActor(){

}

/*
Create a function called getTitlesAndYears that takes in an array of movie
objects. This function should use the native map method to return a new array 
of each film's title followed by the year in parenthesis.
*/

function getTitlesAndYears(){

}

/*
Create a function called getTopBilled that takes in an array of movie objects.
This function should use the native map method to return a new array of the
names of each film's top-billed actor. Assume the actor that is listed first
in the cast array is "top-billed"
*/

function getTopBilled(){
    
}
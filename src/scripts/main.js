const addMovie = require("./addMovie")
const buildMovieWall = require("./buildMovieWall")
//     * Given a user wants to enter a movie
// When the user performs a gesture on a "New Movie" affordance
// Then a form should be presented to the user in which the following information can be entered:

// 1. Name of the Movie
// 2. Plot Summary
// 3. Duration

//     * Given a user has entered in all field values for storing a new movie
// When the user performs a gesture on the "Save Movie" affordance
// Then the movie should be saved in the database

//     * Given the database contains saved movies
// When a user visits the dashboard
// Then all the movies should be displayed

//     * Given a user wants to mark a movie as watched
// When the user is viewing their movie list
// Then there should be a checkbox next to each movie that, when clicked, should mark the movie as watched in the database
// And prevent the movie from being displayed in the list

//     * Given a user wants to edit a movie name, plot summary or duration
// When the user clicks on the name of a movie
// Then the user should be able to edit the name of the movie, plot summary or duration
// And when the enter key is pressed, the new movie information should be saved to the database
// And the dashboard should be updated to display the new movie info
// And each movie should have an affordance to delete the movie

//     * Given a user wants to remove a previously stored movie
// When the user performs a gesture on the delete affordance
// Then the movie should be deleted.
buildMovieWall.buildMovieWall()
addMovie.addNewMovieBtn()
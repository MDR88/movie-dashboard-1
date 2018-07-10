const $ = require("jquery")
const api = require("./apiController")
const movieWall = require("./buildMovieWall")

const container = $("#main-container")
const newMovieBtn = $("<button id='new-movie-btn'>Add New Movie</button>")
const movieTitleInput = $("<input type='text' placeholder='Title'>")
const movieDescInput = $("<input type='text' placeholder='Description'>")
const movieDurationInput = $("<input type='text' placeholder='Duration'>")
const submitBtn = $("<button id='submit-btn'>Submit</button>")
const inputContainer = $("<div id='input-container'>")
inputContainer.append(movieTitleInput).append(movieDescInput).append(movieDurationInput).append(submitBtn)


const addMovie = Object.create({}, {
    addNewMovieBtn: {
        value: function(){
            container.append(newMovieBtn)
            newMovieBtn.click(() => {
                this.buildMovieSubmission()
                container.append(inputContainer)
                newMovieBtn.hide()
            })
        }
    },
    submitClick:{
        value: function(){
            console.log("clicked")
            api.newMovie(movieTitleInput.val(), movieDescInput.val(), movieDurationInput.val()).then(response => {
                inputContainer.remove()
                newMovieBtn.show()
                movieWall.buildMovieWall()
            })
            container.append(newMovieBtn)
        }
    },
    buildMovieSubmission: {
        value: function(){
            movieTitleInput.val("")
            movieDescInput.val("")
            movieDurationInput.val("")
            inputContainer.append(movieTitleInput).append(movieDescInput).append(movieDurationInput).append(submitBtn)
            submitBtn.click(addMovie.submitClick)
        }
    }
})

module.exports = addMovie
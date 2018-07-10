const $ = require("jquery")
const api = require("./apiController")
const clearWall = require("./clearMovieWall")

const movieWallContainer = $("<div id='movie-wall-container' class='movie-wall'>")
const movieContainer = $("<div class='movie-container'>")

const movieWall = Object.create({},{
    buildMovieWall: {
        value: function(){
            clearWall.clearWall()
            api.getMovies().then(moviesList => {
                moviesList.forEach((movie) =>{
                    console.log(movie)
                    if (movie.watched !== "true"){
                        let movieID = String(movie.id)
                        let movieTitle = $(`<h3 id='title${movie.id}'>${movie.title}</h3>`)
                        let movieDesc = $(`<p id='desc${movie.id}'>${movie.desc}</p>`)
                        let movieDur = $(`<p id='dur${movie.id}'>${movie.duration}</p>`)
                        const deleteBtn = $("<button id='delete-btn'>Delete Movie</button>")
                        const editBtn = $("<button id='edit-btn'>Edit Details</button>")
                        const watchedCheck = $("<input type='checkbox' value='watched'>")
                        watchedCheck.click(e => {
                            console.log(e.target.nextSibling)
                            const targetId = e.target.parentNode.id
                            markWatched.markAsWatched(targetId)
                        })
                        editBtn.click(e =>{
                            const targetId = e.target.parentNode.id
                            const movieTitle = $(`#title${targetId}`).text()
                            const movieDesc = $(`#desc${targetId}`).text()
                            const movieDur = $(`#dur${targetId}`).text()
                            this.editMovieInfo(targetId, movieTitle, movieDesc, movieDur)
                        })
                        const movieContainer = $(`<div class='movie-container' id='${movieID}'>`)
                        movieContainer.append(watchedCheck).append(movieTitle).append(movieDesc).append(movieDur).append(editBtn).append(deleteBtn)
                        movieWallContainer.append(movieContainer)
                    }
                })
                $("body").append(movieWallContainer)
            })
        }
    },
    markAsWatched: {
        value: function(movieId){
            console.log(movieTitle)
            console.log(movieDesc)
            console.log(movieDur)
            api.markAsWatched(movieId).then(response =>{
            this.buildMovieWall()
            })
        }
    },
    editMovieInfo: {
        value: function (targetId, movieTitle, movieDesc, movieDur){
            $("#edit-btn").remove()
            $("#delete-btn").remove()
            const submitBtn = $("<button>Submit</button>")
            const titleEdit = $(`<input type='text' value='${movieTitle}'>`)
            const descEdit = $(`<input type='text' value='${movieDesc}'>`)
            const durEdit = $(`<input type='text' value='${movieDur}'>`)
            $(`#title${targetId}`).append(titleEdit)
            $(`#desc${targetId}`).append(descEdit)
            $(`#dur${targetId}`).append(durEdit)
            $(`#${targetId}`).append(submitBtn)
            submitBtn.click(() =>{
                api.editMovie(targetId, titleEdit.val(), descEdit.val(), durEdit.val()).then(response =>{
                    this.buildMovieWall()
                })

            })
        }
    }
})

    module.exports = movieWall
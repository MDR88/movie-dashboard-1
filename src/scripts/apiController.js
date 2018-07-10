const $ = require("jquery")

const api = Object.create({}, {
    getMovies:{
        value: function(){
            return $.ajax("http://localhost:3000/movies")
        }
    },
    markAsWatched: {
        value: function(id){
            return $.ajax({
                url: `http://localhost:3000/movies/${id}`,
                type: "PATCH",
                data: {
                    watched: true
                }
            })
        }
    },
    editMovie:{
        value: function(id, movieTitle, movieDesc, movieDur) {
            return $.ajax({
                url: `http://localhost:3000/movies/${id}`,
                type: "PATCH",
                data: {
                    title: movieTitle,
                    desc: movieDesc,
                    duration: movieDur
                }
            })
        }
    },
    newMovie:{
        value: function(movieTitle, movieDesc, movieDuration){
            return $.ajax({
                url: "http://localhost:3000/movies",
                type: "POST",
                data: {
                    title: movieTitle,
                    desc: movieDesc,
                    duration: movieDuration,
                    watched: false
                }
            })
        }
    }
})

module.exports = api
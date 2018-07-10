const $ = require("jquery")

const clearMovieWall = Object.create({},{
    clearWall: {
        value: function(){
            const movieWall = $("#movie-wall-container")
            movieWall.children().remove()
        }
    }
})

module.exports = clearMovieWall
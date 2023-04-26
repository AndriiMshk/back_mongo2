const Movie = require('../models/movie.js')

const handleError = (res, err) => {
    res
        .status(500)
        .json({ error: err })
}

const getMovies = (req, res) => {
    Movie
        .find()
        .sort({ title: 1 })
        .then((movies) => {
            res
                .status(200)
                .json(movies)
        })
        .catch((err) => handleError(res, err))
}

const getMovie = (req, res) => {
    Movie
        .findById(req.params.id)
        .then((movie) => {
            res
                .status(200)
                .json(movie)
        })
        .catch((err) => handleError(res, err))
}

const deleteMovie = (req, res) => {
    Movie
        .findByIdAndDelete(req.params.id)
        .then((movie) => {
            res
                .status(200)
                .json(movie)
        })
        .catch((err) => handleError(res, err))
}

const createMovie = (req, res) => {
    const movie = new Movie(req.body)
    movie
        .save()
        .then((movie) => {
            res
                .status(201)
                .json(movie)
        })
        .catch((err) => handleError(res, err))
}

const updateMovie = (req, res) => {
    Movie
        .findByIdAndUpdate(req.params.id, req.body)
        .then((movie) => {
            res
                .status(200)
                .json(movie)
        })
        .catch((err) => handleError(res, err))
}

module.exports = {
    getMovies,
    getMovie,
    deleteMovie,
    createMovie,
    updateMovie
}
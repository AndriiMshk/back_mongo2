const express = require('express')
const {
    getMovies,
    getMovie,
    deleteMovie,
    createMovie,
    updateMovie
} = require('../controllers/movie-controller.js')

const router = express.Router()

router.get('/movies', getMovies)
router.get('/movies/:id', getMovie)
router.delete('/movies/:id', deleteMovie)
router.post('/movies', createMovie)
router.patch('/movies/:id', updateMovie)

module.exports = router
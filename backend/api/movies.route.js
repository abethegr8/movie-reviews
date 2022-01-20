import express from 'express'
import MoviesController from './movies.controller.js'
import ReviewsController from './reviews.controller.js'

const router = express.Router()

router.route('/').get(MoviesController.apiGetMovies)
router.route("/id/:id").get(MoviesController.apiGetMovieById)   //Route retrieves a specific movie and all reviews associated for that movie
router.route("/ratings").get(MoviesController.apiGetRatings)    //Route returns us a list of movie ratings (G,PG,R) so that a user can select the ratings from a dropdown menu in the front end 

router
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

export default router

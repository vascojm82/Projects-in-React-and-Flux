let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");

let Actions = {
  searchMovie: function(movieId){
    let action = {
      actionType: Constants.SEARCH_MOVIE,
      movieId: movieId
    }

    Dispatcher.handleViewAction(action);
  },
  searchMovies: function(movie){
    let action = {
      actionType: Constants.SEARCH_MOVIES,
      movie: movie
    }

    Dispatcher.handleViewAction(action);
  },
  receiveMovie: function(movie){
    let action = {
      actionType: Constants.RECEIVE_MOVIE,
      movie: movie
    }

    Dispatcher.handleViewAction(action);
  },
  receiveMovieResults: function(movies){
    let action = {
      actionType: Constants.RECEIVE_MOVIES_RESULTS,
      movies: movies
    }

    Dispatcher.handleViewAction(action);
  }
}

module.exports = Actions;

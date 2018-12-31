let Actions = require("../flux/actions/Actions.jsx");
let HTTP = require('../services/httpService.js');
let apiKey = require('../env/imdbKeys.js');

module.exports = {
  searchMovie: function(movieId){
    HTTP.get(`/movie/${movieId}?api_key=${apiKey}`)
      .then(function(data){
        Actions.receiveMovie(data);
      }.bind(this));  //bind callback to the react component's 'this'
  },
  searchMovies: function(movie){
    HTTP.get(`/search/movie?api_key=${apiKey}&query=${movie.title}`)
      .then(function(data){
        Actions.receiveMovieResults(data.results);
      }.bind(this));  //bind callback to the react component's 'this'
  }
}

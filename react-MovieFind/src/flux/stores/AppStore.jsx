let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");
let EventEmitter = require("events").EventEmitter;
let assign = require('object-assign');
let AppAPI = require('../../utils/appAPI.js');

let CHANGE_EVENT = "change";
let _data = [];       //Movies array
let _selected = '';   //Single Movie Object

Dispatcher.register(function(payload){
  let action = payload.action;

  switch(action.actionType){
    case Constants.SEARCH_MOVIE:
      AppAPI.searchMovie(action.movieId);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.SEARCH_MOVIES:
      AppAPI.searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.RECEIVE_MOVIE:
      AppStore.clearMoviesData();       //Removes All Movies content by changing the '_data' store's value, then this change propagates to App.jsx
      AppStore.setMovie(action.movie);  //Adds content for a single movie by changing the '_selected' store's value, then this propagates to App.jsx
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.RECEIVE_MOVIES_RESULTS:         //Once Changes in the store have propagated to all subscribers:
      AppStore.clearMovieData();                  //Removes single Movie content from the App.jsx component
      AppStore.setMoviesResults(action.movies);   //Adds content for All Movies in the App.jsx component
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

let AppStore = assign({}, EventEmitter.prototype, {
  setMovie: function(movie){    //Once propagated to all subscribers, Adds single Movie content to the App.jsx component
    _selected = movie;
  },
  setMoviesResults: function(movies){   //Once propagated to all subscribers, Adds All Movies content to the App.jsx component
    _data = movies;
  },
  clearMovieData: function(){   //Once propagated to all subscribers, Removes single Movie content from the App.jsx component
    _selected = "";
  },
  clearMoviesData: function(){  //Once propagated to all subscribers, Removes All Movies content from the App.jsx component
    _data = "";
  },
  getMovie: function(){         //Obtains store value for single Movie
    return _selected;
  },
  getMovieResults: function(){  //Obtains store value for Movies array
    return _data;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

module.exports = AppStore;

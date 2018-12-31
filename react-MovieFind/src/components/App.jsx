let React = require('react');
let Favicon = require('react-favicon');
let SearchForm = require('./SearchForm.jsx');
let MovieTiles = require('./tileList/MovieTiles.jsx');
let Movie = require('./Movie.jsx');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');

let App = React.createClass({
  getInitialState: function(){
    return { movies: AppStore.getMovieResults(), movie: null };
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this.onChange);
  },
  onChange: function(){   //CallBack for when there's changes in the AppStore's state
    this.setState({
      movies: AppStore.getMovieResults(),
      movie: AppStore.getMovie()
    });
  },
  render: function(){
    let movieResults = "";    //Movie Array, this is automatically updated when 'AppStore' has changes in it's state
    let movie = "";           //Single Movie Object, this is automatically updated when 'AppStore' has changes in it's state

    //Either doing a movies search or clicking on a movie tile will render the other an empty string, this is done by the dispatcher inside AppStore
    if(this.state.movies.length > 0){   //If there's at least one result from the Search
      movieResults = <MovieTiles movies={this.state.movies} />;
    }

    //If a Movie has been selected by the user, meaning there's also been a change in the AppStore's state
    if(this.state.movie){
      movie = <Movie movie={this.state.movie} />
    }

    return(
      <div>
        <Favicon url="./img/favicon.ico" />
        <SearchForm />
        {movie}
        {movieResults}
      </div>
    );
  }
});

module.exports = App;

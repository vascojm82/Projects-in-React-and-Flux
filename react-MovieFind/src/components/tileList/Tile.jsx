let React = require('react');
let Actions = require('../../flux/actions/Actions.jsx');
let AppStore = require('../../flux/stores/AppStore.jsx');

let Tile = React.createClass({
  onClick: function(movieId){
    Actions.searchMovie(movieId);
  },
  render: function(){
    let imageBaseUrl = 'http://image.tmdb.org/t/p/w300' + this.props.movie.poster_path;
    let titleStyle= {
      marginTop: 0,
      marginBottom: 0
    }

    return(
      <div className="col-md-3 col-sm-4 poster">
        <img className="hvr-grow" src={imageBaseUrl} onClick={ () => {this.onClick(this.props.movie.id)} } />
      </div>
    );
  }
});

module.exports = Tile;

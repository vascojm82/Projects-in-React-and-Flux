let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');

let Movie = React.createClass({
  render: function(){
    let imageBaseUrl = 'http://image.tmdb.org/t/p/w300' + this.props.movie.poster_path;

    return(
      <div className="col-md-12" style={{ position: "relative" }}>
    		<div className="row main-row synopsis-row">
    			<div className="col-xs-12 col-sm-12 col-md-4">
    				<p className="text-center"><a href={this.props.movie.homepage}><img className="single-movie-img hvr-glow" src={imageBaseUrl} /></a></p>
    			</div>
    			<div className="col-xs-12 col-sm-12 col-md-8" style={{ paddingRight: 0 }}>
    				<h1 className="single-movie-title">
    					<strong>{this.props.movie.title}</strong>
    				</h1>
    				<h2 className="overview-header">Synopsis: <br/><br/><span className="single-movie-overview">{this.props.movie.overview}</span></h2>
    				<a href={this.props.movie.homepage}>
    					<button style={{marginTop: 20}} type="button" className="btn btn-primary btn-homepage"><span>Visit Site</span></button>
    				</a>
    			</div>
    		</div>
    	</div>
    );
  }
});

module.exports = Movie;

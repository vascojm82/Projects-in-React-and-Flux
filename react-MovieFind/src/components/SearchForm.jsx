let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');


let SearchForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    let movie = {
      title: this.refs.title.value.trim()
    }

    Actions.searchMovies(movie);
  },
  render: function(){    
    return(
      <div className="col-md-8 col-md-offset-2">
        <div className="search-form">
          <h1 className="text-center">Search for a Movie</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title..." />
            </div>
            <button className="btn btn-primary btn-block">Search Movies</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SearchForm;

let React = require('react');
let Tile = require('./Tile.jsx');
let Actions = require('../../flux/actions/Actions.jsx');
let AppStore = require('../../flux/stores/AppStore.jsx');


let MovieTiles = React.createClass({
  render: function(){
    let componentTitle = "";

    if(this.props.movies.length > 0){
      componentTitle = <h3 className="text-center">Results</h3>;
    }else{
      componentTitle = "";
    }

    return(
          <div className="col-sm-12 col-md-12">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                {componentTitle}
              </div>
              { this.props.movies.map((movie, index) => {
                  return(
                    <Tile movie={movie} key={index} />
                  )
              }) }
            </div>
          </div>
    );
  }
});

module.exports = MovieTiles;

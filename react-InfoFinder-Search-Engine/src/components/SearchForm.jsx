let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');

let SearchForm = React.createClass({
  searchText: function(e){
    e.preventDefault();

    let search = {
      text: this.refs.text.value.trim()
    }

    Actions.searchText(search);
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.searchText} className="well">
          <div className="form-group">
            <label>Search For Something...</label>
            <input type="text" className="form-control" ref="text" />
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SearchForm;

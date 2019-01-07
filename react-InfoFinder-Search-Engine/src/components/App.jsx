let React = require('react');
let Favicon = require('react-favicon');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');
let SearchForm = require('./SearchForm.jsx');
let SearchResults = require('./SearchResults.jsx');

let App = React.createClass({
  getInitialState: function(){
    return { results: null };
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this.onChange);
  },
  onChange: function(){   //CallBack for when there's changes in the AppStore's state
    this.setState({
      results: AppStore.getResults()
    }, () => {
      console.log("results: ",this.state.results);
    });
  },
  render: function(){
    let searchResults = (this.state.results != null || this.state.results != '')?  <SearchResults results={this.state.results} />: results = '';

    return(
      <div>
        <Favicon url="./img/favicon.ico" />
        <SearchForm />
        {searchResults}
      </div>
    );
  }
});

module.exports = App;

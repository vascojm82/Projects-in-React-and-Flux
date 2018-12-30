let React = require('react');
let Favicon = require('react-favicon');
let HTTP = require('../services/HttpService');
let Search = require('./github/Search.jsx');
let Profile = require('./github/Profile.jsx');

let App = React.createClass({
  propTypes: {                    //Making props required and it has to be a string (basic validation)
    clientID: React.PropTypes.string.isRequired,
    clientSecret: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){   //Setting default props values
    return {
      clientID: "92f6f2b3e169c232efbc",
      clientSecret: "7742a4adfcffbe91e00e39ca15f58ffa95efade0"
    }
  },
  getInitialState: function(){
    return{
      username: "vascojm82",
      userData: [],
      userRepos: [],
      perPage: 200
    }
  },
  getUserData: function(){
    HTTP.get(`/${this.state.username}?client_id=${this.props.clientID}&client_secret=${this.props.clientSecret}`)
      .then(function(data){
        console.log("data: ", data);
        this.setState({
          userData: data
        });
      }.bind(this));  //bind callback to the react component's 'this'
  },
  getUserRepos: function(){
    HTTP.get(`/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientID}&client_secret=${this.props.clientSecret}&sort=created`)
        .then(function(data){
          console.log("data: ", data);
          this.setState({
            userRepos: data
          });
        }.bind(this));  //bind callback to the react component's 'this'
  },
  componentWillMount: function(){
    this.getUserData();
    this.getUserRepos();
  },
  handleFormSubmit: function(username){
    this.setState({
      username: username
    }, function(){
      this.getUserData();
      this.getUserRepos();
    });
  },
  render: function(){
    return(
      <div>
        <Favicon url="./img/favicon.ico" />
        <Search onFormSubmit= {this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
});

module.exports = App;

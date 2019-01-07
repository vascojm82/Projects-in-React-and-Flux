let React = require('react');
let Favicon = require('react-favicon');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');
let AddForm = require('./AddForm.jsx');
let VideoList = require('./VideoList.jsx');
let AppAPI = require('../utils/appApi.js');

let App = React.createClass({
  getInitialState: function(){
    return { videos: AppStore.getVideos() };
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this.onChange);
    AppAPI.getVideos();
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this.onChange);
  },
  onChange: function(){   //CallBack for when there's changes in the AppStore's state
    this.setState({
      videos: AppStore.getVideos()
    });
  },
  render: function(){
    console.log(this.state.videos);
    return(
      <div>
        <Favicon url="./img/favicon.ico" />
        <AddForm />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
});

module.exports = App;

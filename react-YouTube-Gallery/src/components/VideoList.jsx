let React = require('react');
let Video = require('./Video.jsx');

let VideoList = React.createClass({
  render: function(){
    console.log("this.props.videos: ",this.props.videos);
    return(
      <div className="row">
        {this.props.videos.map((video, index) => {
          return(<Video video={video} key={index} />);
        })}
      </div>
    );
  }
});

module.exports = VideoList;

let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');

let Video = React.createClass({
  onDelete: function(i,j){
    console.log("VideoId --- Video ---: ",i);
    Actions.removeVideo(i);
  },
  render: function(){
    let link= `https://www.youtube.com/embed/${this.props.video.id}`;
    return(
      <div className="c4">
        <h5>{this.props.video.title} <span className="delete"><a onClick={this.onDelete.bind(this, this.props.video.id)} href="#">X</a></span></h5>
        <iframe width="360" height="285" src={link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{this.props.video.description}</p>
      </div>
    );
  }
});

module.exports = Video;

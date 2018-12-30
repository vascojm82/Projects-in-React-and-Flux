let React = require('react');

let Scorebox = React.createClass({
  render: function(){
    return(
      <div className="well">
        Question {this.props.current} out of {this.props.questions.length} <span className="pull-right"><strong>Score: {this.props.score}</strong></span>
      </div>
    );
  }
});

module.exports = Scorebox;

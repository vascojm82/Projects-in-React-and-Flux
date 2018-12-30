let React = require('react');
let Link = require('react-router').Link;

let Results = React.createClass({
  render: function(){
    let percent = (this.props.score / this.props.questions.length) * 100;
    let message = "";

    if(percent > 80){
      message = "Awesome Job!";
    }else if(percent < 80 && percent > 60){
      message = "You Did Ok!";
    }else{
      message = "You Did Not Do Good.";
    }

    return(
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h2>{percent}% = {message}</h2>
        <hr/>
        <a href="/">Take again</a>
      </div>
    );
  }
});

module.exports = Results;

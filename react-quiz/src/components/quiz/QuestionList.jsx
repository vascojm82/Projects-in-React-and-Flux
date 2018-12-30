let React = require('react');
let Question = require('./Question.jsx');

let QuestionList = React.createClass({
  render: function(){
    return(
      <div className="questions">
        { this.props.questions.map((question) => {
          if(question.id === this.props.current){
            return <Question question={question} key={question.id} {...this.props} />
          }
        })}
      </div>
    );
  }
});

module.exports = QuestionList;

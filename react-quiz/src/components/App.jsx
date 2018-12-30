let React = require('react');
let QuestionList = require('./quiz/QuestionList.jsx');
let Scorebox = require('./quiz/Scorebox.jsx');
let Results = require('./quiz/Results.jsx');
let Favicon = require('react-favicon');

let App = React.createClass({
  getInitialState: function(){
    return{
      questions: [    //Simulates API Call
        {
          id: 1,
          text: "What is your name?",
          choices: [
            {
              id: "a",
              text: "Jose"
            },
            {
              id: "b",
              text: "John"
            },
            {
              id: "c",
              text: "David"
            }
          ],
          correct: "a"
        },
        {
          id: 2,
          text: "What is your father's name?",
          choices: [
            {
              id: "a",
              text: "Jorge"
            },
            {
              id: "b",
              text: "Xavier"
            },
            {
              id: "c",
              text: "Luis"
            }
          ],
          correct: "c"
        },
        {
          id: 3,
          text: "What is your mother's name?",
          choices: [
            {
              id: "a",
              text: "Nancy"
            },
            {
              id: "b",
              text: "Daniela"
            },
            {
              id: "c",
              text: "Macarena"
            }
          ],
          correct: "a"
        },
        {
          id: 4,
          text: "What is your dog's name?",
          choices: [
            {
              id: "a",
              text: "Fido"
            },
            {
              id: "b",
              text: "Cindy"
            },
            {
              id: "c",
              text: "Riley"
            }
          ],
          correct: "b"
        },
      ],
      score: 0,
      current: 1
    }
  },
  setCurrent: function(current){
    this.setState({
      current: current
    }, function(){
      console.log("this.props.current ---App---: ",this.state.current);
    });
  },
  setScore: function(score){
    this.setState({
      score: score
    }, function(){
      console.log("this.props.score ---App---: ",this.state.score);
    });
  },
  render: function(){
    let scorebox = "";
    let results = null;

    if(this.state.current > this.state.questions.length){
      scorebox = "";
      results = <Results {...this.state} />;
    }else{
      scorebox = <Scorebox {...this.state} />;
      results = "";
    }

    return(
      <div>
        <Favicon url="./img/favicon.ico" />
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    );
  }
});

module.exports = App;

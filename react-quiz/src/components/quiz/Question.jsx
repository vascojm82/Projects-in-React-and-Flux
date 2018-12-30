let React = require('react');

let Question = React.createClass({
  onChange: function(e){
    e.preventDefault();

    let selected = e.target.value;

    if(selected === this.props.question.correct){
      this.props.setScore(this.props.score+1);
    }

    this.props.setCurrent(this.props.current+1);
  },
  render: function(){
    return(
      <div className="well">
        <h3>{this.props.question.text}</h3>
        <hr />
        <ul className="list-group">
          { this.props.question.choices.map((choice) => {
            return( <li className="list-group-item" key={choice.id}>
                      <div className="radio">
                        <strong>{choice.id}</strong>&nbsp;&nbsp;<label><input type="radio" onChange={this.onChange.bind(this)} name={this.props.question.id} value={choice.id} />{choice.text}</label>
                      </div>
                    </li> )
          }) }
        </ul>
      </div>
    );
  }
});

module.exports = Question;

let React = require('react');
let Note = require('./Note.jsx');

let NoteList = React.createClass({
  render: function(){
    return(
      <div className="row small-up-2 medium-up-3 large-up-4">
        {this.props.notes.map((note, index) => {
          return(<Note note={note} key={index} />);
        })}
      </div>
    );
  }
});

module.exports = NoteList;

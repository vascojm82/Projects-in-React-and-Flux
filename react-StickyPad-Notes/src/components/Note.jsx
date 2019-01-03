let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');

let Note = React.createClass({
  removeNote: function(noteId){
    console.log(noteId);
    Actions.removeNote(noteId);
  },
  render: function(){
    return(
      <div className="column">
        <div className="note" onDoubleClick={() => {this.removeNote(this.props.note._id.$oid)}} >
          <p>{this.props.note.text}</p>
        </div>
      </div>
    );
  }
});

module.exports = Note;

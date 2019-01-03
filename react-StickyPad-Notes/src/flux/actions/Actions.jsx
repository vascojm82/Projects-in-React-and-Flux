let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");

let Actions = {
  addNote: function(note){
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_NOTE,
      note: note
    });
  },
  receiveNotes: function(notes){
    Dispatcher.handleViewAction({
      actionType: Constants.RECEIVE_NOTES,
      notes: notes
    });
  },
  removeNote: function(noteId){
    Dispatcher.handleViewAction({
      actionType: Constants.REMOVE_NOTE,
      noteId: noteId
    });
  }
}

module.exports = Actions;

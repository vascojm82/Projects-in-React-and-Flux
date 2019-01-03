let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");
let EventEmitter = require("events").EventEmitter;
let assign = require('object-assign');
let AppApi = require('../../utils/appApi.js');

let CHANGE_EVENT = "change";
let _notes = [];

Dispatcher.register(function(payload){
  let action = payload.action;

  switch(action.actionType){
    case Constants.ADD_NOTE:
      AppStore.addNote(action.note);
      AppApi.addNote(action.note);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.RECEIVE_NOTES:
      AppStore.setNotes(action.notes);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.REMOVE_NOTE:
      AppStore.removeNote(action.noteId);
      AppApi.removeNote(action.noteId);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

let AppStore = assign({}, EventEmitter.prototype, {
  addNote: function(note){
    _notes.push(note);
  },
  setNotes: function(notes){
    _notes = notes;
  },
  getNotes: function(){
    return _notes;
  },
  removeNote: function(noteId){
    let index = _notes.findIndex((element) => {
      return (element._id.$oid === noteId)   //Will return index of array where this condition is true
    });

    _notes.splice(index, 1);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

module.exports = AppStore;

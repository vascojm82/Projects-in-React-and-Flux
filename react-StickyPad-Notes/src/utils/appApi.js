let Actions = require("../flux/actions/Actions.jsx");
let HTTP = require('../services/httpService.js');
let mLab_Api_Key = "<ENTER HERE>";

module.exports = {
  addNote: function(note){
    HTTP.post(`/stickypad/collections/notes?apiKey=${mLab_Api_Key}`, note)
      .then(function(response){
        console.log("POST Response: ", response);
      }.bind(this));  //bind callback to the react component's 'this'
  },
  getNotes: function(){
    HTTP.get(`/stickypad/collections/notes?apiKey=${mLab_Api_Key}`)
      .then(function(data){
        console.log("data: ", data);
        Actions.receiveNotes(data);
      }.bind(this));  //bind callback to the react component's 'this'
  },
  removeNote: function(noteId){
    HTTP.delete(`/stickypad/collections/notes/${noteId}?apiKey=${mLab_Api_Key}`)
      .then(function(response){
        console.log("Note Deleted: ", response);
      }.bind(this));  //bind callback to the react component's 'this'
  }
}

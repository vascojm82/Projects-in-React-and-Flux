let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");

let Actions = {
  saveContact: function(contact){
    Dispatcher.handleViewAction({
      actionType: Constants.SAVE_CONTACT,
      contact: contact
    });
  },
  receiveContacts: function(contacts){
    Dispatcher.handleViewAction({
      actionType: Constants.RECEIVE_CONTACTS,
      contacts: contacts
    });
  },
  removeContact: function(contactId){
    Dispatcher.handleViewAction({
      actionType: Constants.REMOVE_CONTACT,
      contactId: contactId
    });
  },
  editContact: function(contact){
    Dispatcher.handleViewAction({
      actionType: Constants.EDIT_CONTACT,
      contact: contact
    });
  },
  updateContact: function(contact){
    Dispatcher.handleViewAction({
      actionType: Constants.UPDATE_CONTACT,
      contact: contact
    });
  },
  addContact: function(){
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_CONTACT,
      contact: ""
    });
  },
}

module.exports = Actions;

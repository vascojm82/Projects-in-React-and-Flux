let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");
let EventEmitter = require("events").EventEmitter;
let assign = require('object-assign');
let AppApi = require('../../utils/appApi.js');

let CHANGE_EVENT = "change";
let _contacts = [];
let _contact_to_edit = "";

Dispatcher.register(function(payload){
  let action = payload.action;

  switch(action.actionType){
    case Constants.SAVE_CONTACT:
      AppStore.saveContact(action.contact);   //To save new contact to the store
      AppApi.saveContact(action.contact);     //To save new contact to Firebase
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.RECEIVE_CONTACTS:
      AppStore.setContacts(action.contacts);    //To load all contacts from Firebase to App.jsx
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.REMOVE_CONTACT:
      AppStore.removeContact(action.contactId);    //To remove contact from store
      AppApi.removeContact(action.contactId);      //To remove contact from Firebase
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.EDIT_CONTACT:
      AppStore.setContactToEdit(action.contact);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.UPDATE_CONTACT:
      AppStore.updateContact(action.contact);
      AppApi.updateContact(action.contact);
      AppStore.emit(CHANGE_EVENT);
    case Constants.ADD_CONTACT:
      AppStore.setContactToEdit(action.contact);
      AppStore.emit(CHANGE_EVENT);
  }

  return true;
});

let AppStore = assign({}, EventEmitter.prototype, {
  getContacts: function(){
    return _contacts;
  },
  setContacts: function(contacts){
    _contacts = contacts;
  },
  saveContact: function(contact){
    _contacts.push(contact);
  },
  setContactToEdit: function(contact){
    _contact_to_edit = contact;
  },
  getContactToEdit: function(contact){
    return _contact_to_edit;
  },
  updateContact: function(contact){
    for(i=0; i<_contacts.length; i++){
      if(_contacts[i].id === contact.id){
        _contacts.splice(i, 1, contact); //At position i, add the new item (contact), and remove 1 item (next item)
      }
    }
  },
  removeContact: function(contactId){
    let index = _contacts.findIndex((element) => {
      return (element.id === contactId)   //Will return index of array where this condition is true
    });

    _contacts.splice(index, 1);   //Removes contact at postion 'index'
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

let Firebase = require('firebase');
let Actions = require("../flux/actions/Actions.jsx");

let config = {
  apiKey: "AIzaSyD4iTiFs3GAfxXxwTDSRF2tUb4c7JSCcvs",
  authDomain: "classwork-3e64b.firebaseapp.com",
  databaseURL: "https://classwork-3e64b.firebaseio.com",
  projectId: "classwork-3e64b",
  storageBucket: "classwork-3e64b.appspot.com",
  messagingSenderId: "710415312804"
};

Firebase.initializeApp(config);

let firebaseRef = Firebase.database().ref(contacts);

module.exports = {
  saveContact: function(contact){
    firebaseRef.push({
      contact: contact
    }, () => {
      this.getContacts();
    });
  },
  getContacts: function(){
    firebaseRef.once("value", function(snapshot){
      let contacts = [];

      snapshot.forEach(function(childSnapshot){
        let contact = {
          id: childSnapshot.key,
          name: childSnapshot.val().contact.name,
          phone: childSnapshot.val().contact.phone,
          email: childSnapshot.val().contact.email
        }

        contacts.push(contact);
      });
      Actions.receiveContacts(contacts);
    });
  },
  updateContact: function(contact){
    let id = contact.id;
    let newContactObj = {
      name:  contact.name,
      phone: contact.phone,
      email: contact.email
    }

    firebaseRef.child(id).child('contact').update(newContactObj);
  },
  removeContact: function(contactId){
    firebaseRef.child(contactId).remove();
  }
}

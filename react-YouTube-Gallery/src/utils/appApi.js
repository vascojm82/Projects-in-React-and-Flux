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

let firebaseRef = Firebase.database().ref('videos');

module.exports = {
  saveVideo: function(video){
    firebaseRef.push({
      video: video
    });
  }
  // ,
  // getVideos: function(){
  //   firebaseRef.once("value", function(snapshot){
  //     let videos = [];
  //
  //     snapshot.forEach(function(childSnapshot){
  //       let video = {
  //         id: childSnapshot.key,
  //         name: childSnapshot.val().contact.name,
  //         phone: childSnapshot.val().contact.phone,
  //         email: childSnapshot.val().contact.email
  //       }
  //
  //       videos.push(video);
  //     });
  //     Actions.receiveContacts(videos);
  //   });
  // }
}

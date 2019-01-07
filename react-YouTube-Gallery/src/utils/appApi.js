let Firebase = require('firebase');
let Actions = require("../flux/actions/Actions.jsx");

let config = {
  apiKey: "<ENTER HERE>",
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
  ,
  getVideos: function(){
    firebaseRef.once("value", function(snapshot){
      let videos = [];

      snapshot.forEach(function(childSnapshot){
        let video = {
          id: childSnapshot.key,
					title: childSnapshot.child("video").val().title,
					video_id: childSnapshot.child("video").val().video_id,
					description: childSnapshot.child("video").val().description
        }
        console.log(`video: ${JSON.stringify(video)}`);
        videos.push(video);
      });
      Actions.receiveVideos(videos);
    });
  },
  removeVideo: function(videoId){
    firebaseRef.child(videoId).remove();
  }
}

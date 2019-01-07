let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");

let Actions = {
  saveVideo: function(video){
    Dispatcher.handleViewAction({
      actionType: Constants.SAVE_VIDEO,
      video: video
    });
  },
  receiveVideos: function(videos){
    console.log("ReceiveVideos Ran");
    Dispatcher.handleViewAction({
      actionType: Constants.RECEIVE_VIDEOS,
      videos: videos
    });
  },
  removeVideo: function(videoId){
    Dispatcher.handleViewAction({
      actionType: Constants.DELETE_VIDEO,
      videoId: videoId
    });
  }
}

module.exports = Actions;

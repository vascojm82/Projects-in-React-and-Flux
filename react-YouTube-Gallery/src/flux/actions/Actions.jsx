let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");

let Actions = {
  saveVideo: function(video){
    Dispatcher.handleViewAction({
      actionType: Constants.SAVE_VIDEO,
      video: video
    });
  }
}

module.exports = Actions;

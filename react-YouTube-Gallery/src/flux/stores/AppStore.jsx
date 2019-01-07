let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");
let EventEmitter = require("events").EventEmitter;
let Actions = require('../actions/Actions.jsx');
let AppAPI = require('../../utils/appApi.js');
let assign = require('object-assign');

let CHANGE_EVENT = "change";
let _videos = [];

Dispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    case Constants.SAVE_VIDEO:
      AppStore.saveVideo(action.video);
      AppAPI.saveVideo(action.video);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.RECEIVE_VIDEOS:
      console.log("Receiving Videos...");
      AppStore.setVideos(action.videos);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.DELETE_VIDEO:
      AppStore.removeVideo(action.videoId);
      AppAPI.removeVideo(action.videoId);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

let AppStore = assign({}, EventEmitter.prototype, {
  saveVideo: function(video){
    _videos.push(video);
  },
  getVideos: function(){
    console.log('Store getVideos: ',_videos);
    return _videos;
  },
  setVideos: function(videos){
    console.log('Store setVideos: ',videos);
    _videos = videos;
  },
  removeVideo: function(videoId){
    let index = _videos.findIndex((x) => x.id === videoId);

    _videos.splice(index, 1);
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

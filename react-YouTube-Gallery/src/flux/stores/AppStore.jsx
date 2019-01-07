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
  }

  return true;
});

let AppStore = assign({}, EventEmitter.prototype, {
  saveVideo: function(video){
    _videos.push(video);
  },
  getVideos: function(){
    return _videos;
  },
  setVideos: function(videos){
    _videos = videos;
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

let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");
let EventEmitter = require("events").EventEmitter;
let assign = require('object-assign');
let HTTP = require('../../services/httpService.js');
let AppAPI = require('../../utils/AppApi.js');

let CHANGE_EVENT = "change";
let _items = [];
let _searchText = '';

Dispatcher.register(function(payload){
  let action = payload.action;

  switch(action.actionType){
    case Constants.SEARCH_TEXT:
      AppAPI.searchText(action.search);
      AppStore.setSearchText(action.search);
      AppStore.emit(CHANGE_EVENT);
      break;
    case Constants.RECEIVE_RESULTS:
      AppStore.setResults(action.results);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

let AppStore = assign({}, EventEmitter.prototype, {
  setSearchText: function(search){
    _searchText = search.text;
  },
  setResults: function(results){
    _items = results;
  },
  getResults: function(){
    return _items;
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

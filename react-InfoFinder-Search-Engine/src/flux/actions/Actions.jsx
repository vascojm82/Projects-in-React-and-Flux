let Dispatcher = require("../dispatcher/Dispatcher.jsx");
let Constants = require("../constants/Constants.jsx");

let Actions = {
  searchText: function(search){
    Dispatcher.handleViewAction({
      actionType: Constants.SEARCH_TEXT,
      search: search
    });
  },
  receiveResults: function(results){
    Dispatcher.handleViewAction({
      actionType: Constants.RECEIVE_RESULTS,
      results: results
    });
  }
}

module.exports = Actions;

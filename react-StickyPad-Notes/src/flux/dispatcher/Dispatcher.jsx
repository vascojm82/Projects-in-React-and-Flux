let FluxDispatcher = require("flux").Dispatcher;
let assign = require("object-assign");

let Dispatcher = assign(new FluxDispatcher(), {
  handleViewAction: function(action){
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
});

module.exports = Dispatcher;

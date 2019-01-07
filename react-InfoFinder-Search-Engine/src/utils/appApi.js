let Actions = require("../flux/actions/Actions.jsx");
let httpService = require("../services/httpService.js");

module.exports = {
    searchText: function(search){
      let url = "?q=" + search.text + "&format=json&pretty=1";
      httpService.get(url)
        .then((data) => {
          console.log("data: ",data);
          Actions.receiveResults(data.RelatedTopics);
        });
    }
}

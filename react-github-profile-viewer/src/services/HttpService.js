let Fetch = require("whatwg-fetch");
let baseUrl = "https://api.github.com/users";

let service = {
  get: function(url){
    return fetch(baseUrl + url)
      .then(function(response){
        console.log("FETCH response: " + JSON.stringify(response));
        return response.json();
      });
  },
  post: function(url, body){
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(body)
    }).then(function(response){
      return response;
    });
  }
}

module.exports = service;

let React = require('react');
let ReactDOM = require('react-dom');
let App = require('./components/App.jsx');
let HTTP = require('./services/httpService.js');

ReactDOM.render(<App />, document.getElementById('main'));

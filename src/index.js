import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Import from AUthorQUiz.js and also below in render
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

//React component model of the UI represented as a JS Object.
let model = { clicks: 0};

//Creates a function 'render' which immediately renders the page and is then called in the onClick function to refresh after a click.
function render(){
  // App passes the props of 'clicks' and the function 'onClick' to be used in App.js
  ReactDOM.render(<AuthorQuiz clicks={model.clicks} onClick={()=> {model.clicks += 1; render(); }}/>, document.getElementById('root'));
}
render();

serviceWorker.unregister();

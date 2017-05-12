import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter  as Router } from 'react-router-dom';
import { TodoApp } from 'TodoApp';


// Carico foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
<TodoApp />,
  document.getElementById('app')
); // eslint-disable-line

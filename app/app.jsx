import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter  as Router } from 'react-router-dom';

// Carico foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
<p>Boilerplate 3 Project</p>,
  document.getElementById('app')
); // eslint-disable-line

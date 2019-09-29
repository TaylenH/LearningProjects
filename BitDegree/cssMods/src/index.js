import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Main from './templates/main.js';

export defaultt
 function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Main, locals));
  callback(null, '<!DOCTYPE html>' + html);
}

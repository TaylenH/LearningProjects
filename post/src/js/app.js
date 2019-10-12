import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Site from './site';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component name="world" />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Site);

module.hot.accept('./site.js', () => {
  const NextSite = require('./site.js').default;
  render(NextSite);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Index from './index';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Index);

module.hot.accept('./index.js', () => {
  const NextIndex = require('./index.js').default;
  render(NextIndex);
});

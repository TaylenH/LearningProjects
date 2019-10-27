import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const TopicsContext = React.createContext('default context');

const Home = lazy(() => import('./routes/home/Home.js'));
const About = lazy(() => import('./routes/about/About.js'));
const Topics = lazy(() => import('./routes/topics/Topics.js'));

class Index extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/' id='homeLink'>Home</Link>
            </li>
            <li>
              <Link to='/about' id='aboutLink'>About</Link>
            </li>
            <li>
              <Link to='/topics' id='topicsLink'>Topics</Link>
            </li>
          </ul>
          <TopicsContext.Provider value='custom context'>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/topics' component={Topics} />
              </Switch>
            </Suspense>
          </TopicsContext.Provider>
        </div>
      </Router>
    );
  }
}

export default hot(Index);
export { TopicsContext };

import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/topics' component={Topics} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default Index;

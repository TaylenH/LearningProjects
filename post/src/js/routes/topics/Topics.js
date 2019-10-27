import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './topics.sass';
import Topic from './topic/Topic';

class Topics extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <>
        <h2 className={styles.topicsTag}>Topics</h2>

        <ul>
          <li>
            <Link to={`${match.url}/components`} id='componentsLink'>Componets</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`} id='propsVStateLink'>Props v state</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/:topicId`} component={Topic} />
          <Route path={match.path}>
            <h3 className={styles.selectTag}>Please select a topic</h3>
          </Route>
        </Switch>
      </>
    );
  }
}

Topics.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string
  ])).isRequired,
};

export default Topics;

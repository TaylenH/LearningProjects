import React from 'react';
import PropTypes from 'prop-types';
import { TopicsContext } from '../../../index';
import styles from './topic.sass';

class Topic extends React.Component {
  render() {
    const { match: { params } } = this.props;
    return (
      <>
        <h3 className={styles.topicTag}>Requested topic ID: {params.topicId}</h3>
        <p>{this.context}</p>
      </>
    );
  }
}

Topic.contextType = TopicsContext;

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string
  ])).isRequired
};

export default Topic;

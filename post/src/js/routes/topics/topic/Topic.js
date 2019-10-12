import React from 'react';
import PropTypes from 'prop-types';
import styles from './topic.sass';

class Topic extends React.Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    return (
      <h3 className={styles.topicTag}>Requested topic ID: {params.topicId}</h3>
    );
  }
}

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string
  ])).isRequired
};

export default Topic;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './site.sass';

class Site extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p className={styles.msg}>Hello, {name}!</p>
      </div>
    );
  }
}

Site.propTypes = {
  name: PropTypes.string.isRequired
};

export default Site;

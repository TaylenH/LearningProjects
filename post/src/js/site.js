import React, { Component } from 'react';
import Styles from '../css/components/site.sass';
import Robot from './robot';

export default class Site extends Component {
  render() {
    return (
      <div>
        <h1 className={Styles.redboi}>I am red</h1>
        <Robot />
        <a className={Styles.datb} href='#'>
          Hello
        </a>
      </div>
    );
  }
}

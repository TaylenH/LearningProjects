import React, { Component } from 'react';

export default class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tt: this.props.tt
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.tt}</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

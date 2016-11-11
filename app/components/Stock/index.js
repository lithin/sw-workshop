import React from 'react';

import Component from './component';
import styles from './index.css';

export default class Getter extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('data/get')
        .then(response => response.json())
        .then(result => {
          this.setState({
            data: result,
          });
        });
    }, 2000);
  }

  componentWillUnmount() {
    this.interval.stop();
  }

  render() {
    return (
      <Component data={this.state.data} />
    );
  }
}

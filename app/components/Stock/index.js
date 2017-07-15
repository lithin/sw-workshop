import React from 'react';

import Component from './component';
import styles from './index.css';

export default class Getter extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      offline: false
    };
  }

  getUpdate = () =>
    fetch('https://xrlk07ktf3.execute-api.eu-west-1.amazonaws.com/dev/get')
      .then(response => {
        this.setState({
          offline: response.statusText === 'cached'
        });
        return response.json();
      })
      .then(result => {
        this.setState({
          data: result,
        });
      });

  componentDidMount() {
    this.getUpdate();
    this.interval = setInterval(() => {
      this.getUpdate();
    }, 5000);
  }

  componentWillUnmount() {
    this.interval.stop();
  }

  render() {
    return (
      <Component data={this.state.data} offline={this.state.offline}/>
    );
  }
}

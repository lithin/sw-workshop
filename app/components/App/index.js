import React, { Component } from 'react';
import Stock from '../Stock';
import styles from './index.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Stock />
      </div>
    );
  }
}

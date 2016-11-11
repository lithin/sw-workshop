import React from 'react';

import styles from './index.css';
import image from './fashion.jpeg';

const Item = ({ name, value }) => (
  <div className={styles.item}>
    <div className={styles.itemName}>
      {name}
    </div>
    <div className={styles.itemValue}>
      {value}
    </div>
  </div>
)

const Display = ({ data }) => {
  return (
    <div className={styles.stats}>
      <h1>Stock</h1>
      <img src={image} alt="Fashion" />
      { data.map(({ name, value }) => <Item name={name} value={value} key={name} />) }
    </div>
  );
};

export default Display;

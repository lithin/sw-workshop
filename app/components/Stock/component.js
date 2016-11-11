import React from 'react';

import styles from './index.css';

const Item = ({ name, value }) => (
  <div>
    <div>
      {name}
    </div>
    <div>
      {value}
    </div>
  </div>
)

const Display = ({ data }) => {
  return (
    <div className={styles.stats}>
      <h1>Stock</h1>
      { data.map(({ name, value }) => <Item name={name} value={value} key={name} />) }
    </div>
  );
};

export default Display;

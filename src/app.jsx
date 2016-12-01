import styles from './index.scss';
import '../global/styles.css';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works</h1>
        <p>This React project works including <span className={styles.blueBg}>local styles</span> and <span className="my-style">global styles.</span></p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-success">Success</a></p>
      </div>
    )
  }
}

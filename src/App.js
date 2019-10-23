import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';


const App = () => {
  const [inc, setInc] = useState(129);

  return <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.text}>{inc}</div>
      <button onClick={() => setInc(inc + 1)} className={styles.increment}>Прибавить</button>
    </div>
  </div>;
};

export default App;

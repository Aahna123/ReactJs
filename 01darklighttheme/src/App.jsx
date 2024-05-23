import { useState } from "react";
import styles from "./App.module.css";

function App() {
  // let counter=15;

  let [counter, setCounter] = useState(15);
  let [mode, setMode] = useState(true);

  const addValue = () => {
    if (counter >= 20) {
      alert("Limit exceeded");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("Limit exceeded");
    } else {
      setCounter(counter - 1);
    }
  };

  const abc = () => {
    setMode(!mode);
  };

  return (
    <div className={styles.container}>
      <center className={mode ? styles.light : styles.dark}>
        <h1>Counter</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue} className={styles.button}>
          Add value
        </button>
        <button onClick={removeValue} className={styles.button}>
          Remove Value
        </button>
        <br />
        <br />
        <button onClick={abc} className={styles.button}>
          {mode ? "Dark Mode" : "Light Mode"}
        </button>
      </center>
    </div>
  );
}

export default App;

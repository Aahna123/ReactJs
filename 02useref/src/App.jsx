import { useEffect, useRef, useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const addvalue = () => {
    setCount(count + 1);
  };
  const removevalue = () => {
    setCount(count - 1);
  };

  const r = useRef();
  useEffect(() => {
    // a.current = a.current + 1;
    //console.log(`rendering and the value of a is ${a.current}`);
    console.log(count);
    r.current.style.backgroundColor = "red";
  });

  return (
    <>
      <button ref={r} onClick={addvalue}>
        Add Value:{count}
      </button>
      <button onClick={removevalue}>Remove Value:{count}</button>
    </>
  );
}

export default App;

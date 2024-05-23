import { useState } from "react";
import { useEffect } from "react";

function App() {
  const addvalue = () => {
    setC(c + 1);
  };

  let [c, setC] = useState(0);

  useEffect(() => {
    alert("rendering only first time");
  }, []);

  useEffect(() => {
    console.log(c);
    alert("rendering every time the website is refreshed");
  });

  useEffect(() => {
    alert("renders when count is called");
  }, [c]);

  return (
    <>
      <button onClick={addvalue}>Value is {c}</button>
    </>
  );
}

export default App;

import './App.css';
//import { User } from "./user";

function App() {
  const names=[
    {name:"Pedro", age:12},
    {name:"Jessica", age:15}
  ];
  return (
    <div className="App">
     {names.map((value, key)=>{
      return <User name={value.name} age={value.age} />;
     })}
    </div>
  );
}

 const User = (props) => {
  return(
    <div>
      {props.name} {props.age}
    </div>
  );
};



export default App;
 
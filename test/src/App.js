import logo from './logo.svg';
import './App.css';
import Main1 from './Components/Main1';
//import myData from './Data/myData';
import { myData } from './Data/myData';

import {useState} from "react";





function App() {

  //let myVar = "Aroshana";
  const [myVar, setMyVar] = useState("Aroshana")

  const clickHandle = ()=>{
  //myVar = "Sasanka";
  setMyVar("Sasanka");
  console.log(myVar);
  }



  const mainBlock = myData.map(({name,city,age,id,image})=>{
    return <Main1 key = {id} name = {name} city = {city} age = {age} image = {image}/>;
  
  });

  return (

    <div className = "mainC">
      <h5>{myVar}</h5>
  
  <div className = "mainContainer">
    {mainBlock}

  </div>
  <br></br>
  <button style = {
    {
    fontSize: "20px",
    border:"1px solid red",
    padding: "7px 12px",
  }


  } onClick = {clickHandle}>
    click Me
    </button>
  </div>

  );

}


export default App;

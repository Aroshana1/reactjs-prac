import logo from './logo.svg';
import './App.css';
import Main1 from './Components/Main1';
//import myData from './Data/myData';
import { myData } from './Data/myData';

import {useState} from "react";





function App() {

  //let myVar = "Aroshana";
  const [inputVal,setInputVal]=useState(0);

  const clickHandle = ()=>{
  //myVar = "Sasanka";
  setTimeout(()=>{
    console.log("I am Clicked");
    setInputVal((pre)=>{
      if(pre<1){
        return pre + 1;
      }else if(pre<2){
        return pre+3;
      }else{
        return pre+2;
      }
    });
  },2000);

  


  
  }


console.log(inputVal);


  const mainBlock = myData.map(({name,city,age,id,image},index)=>{
    return <Main1 key = {id+index} name = {name} city = {city} age = {age} image = {image}/>;
  
  });

  const inputHandleChange = (event,data)=>{
    event.preventDefault();
    console.log(data);
    setInputVal(event.target.value);
  }

  return (

    <div className = "mainC">
      <h5>{inputVal}</h5>

  
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

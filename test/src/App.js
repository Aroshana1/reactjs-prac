import logo from './logo.svg';
import './App.css';
import Main1 from './Components/Main1';
//import myData from './Data/myData';
import { myData } from './Data/myData';

import {useState} from "react";





function App() {

  //let myVar = "Aroshana";
  const [myVar, setMyVar] = useState({ name: "arosh",
  city: "kandy",
  position: "dev",})

  const [myDataState,setMyDataState] = useState(myData);
  const [inputVal,setInputVal]=useState("");

  const clickHandle = ()=>{
  //myVar = "Sasanka";
  setMyVar({...myVar,city:"Anamaduwa",name:"Gemba"});

  setMyDataState([...myDataState,{
    id:1236,
    name: "bindu",
    city: "trinco",
    position: "data dev",
    age: "27",
    image: "https://thumbs.dreamstime.com/z/beautiful-landscape-sunrise-kirkjufellsfoss-waterfall-kirkjufell-mountain-iceland-europe-161202079.jpg"
  },])
  
  }


  //console.log(myDataState);


  const mainBlock = myDataState.map(({name,city,age,id,image},index)=>{
    return <Main1 key = {id+index} name = {name} city = {city} age = {age} image = {image}/>;
  
  });

  return (

    <div className = "mainC">
      <h5>{myVar.name}</h5>
  
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

    <br/>  <br/>
    <input style={
      {
        border:'1px solid red',
        fontSize: '14px',
        padding:'7px'
      }
    } type ="text"/>

    
  </div>

  );

}


export default App;

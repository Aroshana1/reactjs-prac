
import './App.css';
import Header from './Components/Header';
import Unit from './Components/Unit';
import {Fragment, useState} from "react";
import { useEffect } from 'react';

const App = ()=>{

  //const [imgUrl,setImgUrl]=useState("");
  //const [name,setName]=useState("");
  //const [city,setCity]=useState("");
  //const [position,setPosition]=useState("");

  const[inputDataa,setInputDataa]=useState({
    imgUrl:'',
    name:'',
    city:'',
    position:'',

  })

  const [myData, setMydata] = useState([]);

  useEffect(()=>{
    console.log('use effect calling...')
  });

console.log(myData);
  return (

  <Fragment>

  <div className="main_cont">
  <div className = "main_left">
    {/*<input type = "text" value = {imgUrl} onChange = {(e)=>{e.preventDefault() 
      setImgUrl(e.target.value)}}/>
    <input type = "text" value = {name} onChange = {(e)=>{e.preventDefault() 
      setName(e.target.value)}}/>
    <input type = "text" value = {city} onChange = {(e)=>{e.preventDefault() 
      setCity(e.target.value)}}/>
    <input type = "text" value = {position} onChange = {(e)=>{e.preventDefault() 
    setPosition(e.target.value)}}/> */}
      

      <input type = "text" placeholder="imgurl" value = {inputDataa.imgUrl} onChange = {(e)=>{e.preventDefault() 
      setInputDataa(preInputDataa=>({
        ...preInputDataa,
        imgUrl:e.target.value,

      }))}}/>
      <input type = "text" placeholder='name' value = {inputDataa.name} onChange = {(e)=>{e.preventDefault() 
      setInputDataa(preInputDataa=>({
        ...preInputDataa,
        name:e.target.value,
      }))}}/>

    <input type = "text" placeholder='city' value = {inputDataa.city} onChange = {(e)=>{e.preventDefault() 
      setInputDataa(preInputDataa=>({
        ...preInputDataa,
        city:e.target.value,
      }))}}/>

    <input type = "text" placeholder='position' value = {inputDataa.position} onChange = {(e)=>{e.preventDefault() 
      setInputDataa(preInputDataa=>({
        ...preInputDataa,
        position:e.target.value,
      }))}}/>
 
     <button onClick  = { ()=>
     {

      setMydata(pre=>{
        return [...pre,{
          imgUrl:inputDataa.imgUrl,
          name:inputDataa.name,
          city:inputDataa.city,
          position:inputDataa.position,

        }]
      })

      //previous values
      setInputDataa((pre)=>{

        if(pre.imgUrl.length>0){
          return {
            ...pre,
            imgUrl:'',
          };

        }else{
          return pre;
        }

      })
      setInputDataa(gemba=>gemba.name.length>0?({
        ...gemba,
        name:'',
      }):(gemba));
      setInputDataa(preCity=>preCity.city.length>0?({
        ...preCity,
        city:'',

      }):(preCity));
      setInputDataa(pre=>pre.position.length>0?(
        {
          ...pre,
          position:'',
        }
      ):(pre));
     }
  
  }>Submit</button>


  </div>
  <div className="main_right">
    {myData?.map(({imgUrl,name,city,position},index)=><Unit 
    imgUrl={imgUrl}
    name = {name}
    city = {city}
    position = {position}
    key = {index}
    />)}

  </div>
  </div>
  </Fragment>
 )
  }

export default App;

import './App.css';
import Unit from './Components/Unit';
import {useState} from "react";

const App = ()=>{

  const [imgUrl,setImgUrl]=useState("");
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const [position,setPosition]=useState("");

  const [myData, setMydata] = useState([]);

//console.log(myData);
  return (<div className="main_cont">
  <div className = "main_left">
    <input type = "text" value = {imgUrl} onChange = {(e)=>{e.preventDefault() 
      setImgUrl(e.target.value)}}/>
    <input type = "text" value = {name} onChange = {(e)=>{e.preventDefault() 
      setName(e.target.value)}}/>
    <input type = "text" value = {city} onChange = {(e)=>{e.preventDefault() 
      setCity(e.target.value)}}/>
    <input type = "text" value = {position} onChange = {(e)=>{e.preventDefault() 
      setPosition(e.target.value)}}/>
 
     <button onClick  = { ()=>
     {

      setMydata(pre=>{
        return [...pre,{
          image:imgUrl,
          name:name,
          city:city,
          position:position,

        }]
      })

      //previous values
      setImgUrl((pre)=>{

        if(pre.length>0){
          return "";

        }else{
          return pre;
        }

      })
      setName(gemba=>gemba.length>0?(""):(gemba));
      setCity(preCity=>preCity.length>0?(""):(preCity));
      setPosition(pre=>pre.length>0?(""):(pre));
     }
  
  }>Submit</button>


  </div>
  <div className="main_right">
    {myData?.map(({image,name,city,position},index)=><Unit 
    image={image}
    name = {name}
    city = {city}
    position = {position}
    key = {index}
    />)}

  </div>
  </div>
 )
  }
export default App;
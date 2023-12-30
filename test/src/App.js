import logo from './logo.svg';
import './App.css';
import Main1 from './Components/Main1';
//import myData from './Data/myData';
import { myData } from './Data/myData';





function App() {
  const mainBlock = myData.map(({name,city,age,id,image})=>{
    return <Main1 key = {id} name = {name} city = {city} age = {age} image = {image}/>;
  
  });

  return (

    <div className = "mainC">
      <h5>Aroshana Dissanayake</h5>
  
  <div className = "mainContainer">
    {mainBlock}

  </div>
  </div>

  );

}


export default App;

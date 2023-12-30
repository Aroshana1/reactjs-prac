import logo from './logo.svg';
import './App.css';
import Main1 from './Components/Main1';
//import myData from './Data/myData';
import { myData } from './Data/myData';

const NewBlock = ()=>{
  return(
  <>
        {myData.map(({name,city,age,id})=>{
        return <Main1 key = {id} name = {name} city = {city} age = {age}/>;
      
      })}
  
  </>)
}





function App() {
  return (
    <>
    <div>
      <h1>hello</h1>
    </div>
      <p>world</p>

      <Main1 />
      <Main1 name = "Jaye" city = "seeduwa" age = "34">
        <p>fix</p>

      </Main1>
      <Main1 name = "Bandara" city = "badulla" age = "26" />
      <Main1 name = "Vimal" city = "dadulla" age = "20" />
      
      {myData.map((ele)=>{
        return <Main1 name = {ele.name} city = {ele.city} age = {ele.age}/>;
      
      })}

      {myData.map(({name,city,age},index)=>{
        return <Main1 key = {index} name = {name} city = {city} age = {age}/>;
      
      })}

      {myData.map(({name,city,age,id})=>{
        return <Main1 key = {id} name = {name} city = {city} age = {age}/>;
      
      })}

      <NewBlock />


    </>
 
  );
}

export default App;

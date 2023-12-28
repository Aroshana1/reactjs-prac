import logo from './logo.svg';
import './App.css';
import Main1 from './Components/Main1';


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
      
    </>
 
  );
}

export default App;

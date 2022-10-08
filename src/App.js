
import { useEffect, useState } from 'react';
import './App.css';
import CommonAccordion from './Components/CommonAccordion';



function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
  .then(response => response.json())
  .then(items => setData(items))
  },[])

  return (
    <>
    <div className="App">
      <h1>accordion</h1>
      <CommonAccordion data={data}/>
    </div>
    </>
  );
}

export default App;

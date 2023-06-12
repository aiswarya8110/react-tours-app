import './App.css';
import React, { useEffect, useState } from 'react';
import Tours from './Tours';

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading ] = useState(true);
  const [tours, setTours ] = useState([]);

  function removeTour(id){
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  async function fetchTours(){
    setLoading(true);
    try{
        const response = await fetch(url);
        const data =  await response.json();
        setTours(data);
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchTours(); 
  },[])


  if(loading){
    return(
        <main>
          <div className="loading" />
        </main> 
    )
  }

  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" style={{marginTop: "2rem"}} 
        onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App;

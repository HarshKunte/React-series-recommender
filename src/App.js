import React, { useState } from 'react'

import './App.css';

function App() {
  const [series,setSeries] = useState([])

  const genres ={
    "Comedy🤣":["Friends","The Office", "Brooklyn Nine-Nine"],
    "Crime🔪": ["Money Heist", "Lupin","Dark"],
    "Drama😧": ["Game of Thrones","The Queens Gambit", "It's a Sin"],
    "Mystery🔍": ["Breaking Bad", "Sherlock Holmes"],
    "Sci-Fi🔭": ["Mr.Robot", "Black Mirror", "Wanda-Vision"],
  }

  return (
    <div className="App container d-flex py-5 align-items-center flex-column">
      <header className="App-header">
        <h1>Series recommender</h1>
       <h3>Click on any genre.</h3>
      </header>
     
          <div className="genre my-3">
          {
                Object.entries(genres).map(([genre, val]) => 
                   
                    <button key={genre} onClick={()=>setSeries(val)} className="btn btn-outline-primary m-3 ">{genre}</button>
                )
            }
             
           
          <ul class="list-group" >
            {
              series.map((val,key)=>(
                
                <li key={key} class="list-group-item fw-bold">{val}</li>
                ))
              }
          </ul>
      
              </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import { ListMovie } from "./componets/ListMovies";
import Movies from "./componets/Movies";
import Add from "./componets/Add";
import Trailer from "./componets/Trailer";
import './App.css';
import Search from "./componets/Search";
import {Switch,Route} from "react-router-dom";

function App() {
  const [movie,setMovie] = useState(ListMovie);
  const [searchn, setSearchn] = useState("")
  const [searchr, setSearchr] = useState(1);
  const addMovie =(m)=>{
    setMovie([...movie, m])
  }
  
  return (
    <div className="App">
      <div className="head">
      <h1>MOVIE APP</h1>
       <Search setSearchn ={setSearchn} searchr={searchr} setSearchr ={setSearchr} />
       
      </div>
     <Switch>
       <Route exact path ='/' render ={()=> <div className="m-d"> <Movies movie ={movie} searchn ={searchn} searchr ={searchr} />
        <Add addMovie ={addMovie}/> </div>}/>
       <Route path = '/trailer' component = {Trailer} />
     </Switch>
       
       
      
      </div>
  );
}

export default App;
/*  <div className="m-d">
      <Movies movie ={movie} searchn ={searchn} searchr ={searchr} />
      <Add addMovie ={addMovie}/>
      </div> */

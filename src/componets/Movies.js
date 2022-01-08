import React from "react";
import MovieCards from "./MovieCard"
function Movies({movie, searchn, searchr}){
    return(
        <div div className="movie-container">

            {movie
            .filter((x)=> x.name.toLowerCase().trim().includes(searchn) && x.rate >= searchr ) 
            .map((elm, i)=>
            <MovieCards key={elm.id} elm ={elm} />)} 
        </div>
    )
}
export default Movies;
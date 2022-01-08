import React from "react";
import Rate from "./Rate";
import {Link} from "react-router-dom";
function MovieCard({elm}){
    return(
        <>
            <Link style={{color:"whitesmoke", textDecoration :'none'}} to ={{pathname : "/trailer" , state:{elm:elm}}}>

          <div className="movie">
          <img src={elm.img} alt ="poster"/>
          <div className="info-movie">
             <h3>{elm.name}</h3>
             <Rate rate={elm.rate}/>
          </div>
          <div className="m-overviem">
              <h5>Overview:</h5>
              <p>{elm.overview}</p>
          </div>
        </div>
        </Link>
        </>
    )
        
        
}

export default MovieCard;
//:{img, name, rate, overview}
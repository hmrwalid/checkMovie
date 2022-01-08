import React from "react";

const Rate =({rate, setSearchr})=>{
    const stars=(x)=>{
        let arrOfStars =[];
        for (let i = 1; i <= 5; i++) {
           if(i <= x){
            arrOfStars.push(<span onClick={() =>setSearchr(i)}>★</span>)
           }else{
            arrOfStars.push(<span onClick={() =>setSearchr(i)}>☆</span>) 
           }            
        }
        return arrOfStars
    }
    return(
          <div>
              {stars(rate)}
          </div>
    )
}
export default Rate;
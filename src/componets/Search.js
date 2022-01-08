import React from "react";
import { MDBCol } from "mdbreact";
import Rate from "./Rate";

const Search =({setSearchn,setSearchr, searchr})=>{
    return(
        <div className="ser">
           
             <MDBCol md="6">
      <input className="form-control search" type="text" placeholder="Search" aria-label="Search" 
      onChange={(e)=> setSearchn(e.target.value)} />
            <Rate setSearchr ={setSearchr} rate={searchr} />

    </MDBCol>

        </div>
    )
}
export default Search;
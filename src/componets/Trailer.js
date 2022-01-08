import React from 'react'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
const Trailer = (props) => {
    const ov = props.location.state.elm.overview
    const vid = props.location.state.elm.video
    return (
        <div >

            <h2>Trailer</h2>
            <div className='trailer'>
            <div style={{margin :"20px"}}>
             <ReactPlayer controls  url={vid}/> 
             <h3>Descreption:</h3>
            <div style={{padding: "1rem"}}>{ov} </div> 
              </div>           
             </div>
           <Link style={{color :'red' , fontSize : "20px" }} to ='/'> <span style={{margin : "15%"}}>Return page home</span></Link>
        </div>
    )
}

export default Trailer
//     console.log(props.location.state.elm.overview);

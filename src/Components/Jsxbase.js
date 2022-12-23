import React from "react";
import './Jsx.css'
const Hello=()=>{
    // return(
    //     // <div>
    //     //     <h1>Hi</h1>
    //     // </div>
    // )
    return React.createElement('div',{id:'hello',className:'sampleclass'},React.createElement('h1',null,'Zara'))
}
export default Hello
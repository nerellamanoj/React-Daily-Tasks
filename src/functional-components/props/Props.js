import React, { Children } from "react";


const Props=(props)=>{
    return(
        <div>
            <h1>Hello {props.name} {props.howru}</h1>
        {props.children}
        </div>
        
        
     

    );
}
export default Props;
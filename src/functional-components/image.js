import React from "react";

function Image() {
  var data = "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg";
  
  var width = 100;
  var alt = "manoj";

  var image=Array.from({length:3}).map((_, index)=>(

<img src={data} alt={alt} width={width}/>
  ));

 

  return (
    <>
    {image}
    
        
     
    </>
  );
}

export default Image;

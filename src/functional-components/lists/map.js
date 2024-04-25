import React from "react";

var Fruits = () => {
  const data = [
    {
      name: "manoj",
      id: 1,
      gender: "male",
    },{
        name: "kumar",
      id: 2,
      gender: "female",
    },{
        name: "hasini",
      id: 3,
      gender: "female",
    }
  ];
  return (
    <table>
        <tr>
        <ol>
            {data.map((val) => (
                <React.Fragment key={val.id}>
                  <td>{val.gender}</td>  
                 <td>   {val.name}</td>
              <td>      {val.id}</td>
                </React.Fragment>
            ))}
        </ol>
        </tr>
    </table>
    
        
    
  );
};
export default Fruits;

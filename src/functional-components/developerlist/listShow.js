import { employees } from "./list"

const ListShow=()=>{
    const filterquary="react developer"

    return(
        <>
        {
         employees.filter(val=>val.designation==filterquary).map(value=>
            <>
            <h4>Name:{value.name}</h4>
         <h4>Designation:{value.designation}</h4>
         <h4>salary:{value.salary}</h4></>
        
        
        
        
        
        )


         }

        
        
        </>
    )
}
export default ListShow;
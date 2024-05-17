import ChildComponent from "./chilcomponent"

const ParentComponent=()=>{
    return (
        <>
        <h1>This is Parent</h1>
        <ChildComponent value="parent to child"/>
        <ChildComponent>
            <p>This is manoj learning react</p>
        </ChildComponent>

    
        </>
    )

}
export default ParentComponent
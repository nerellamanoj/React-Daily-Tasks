const ChildComponent=(props)=>{
    console.log(props);
    return(
        <>
        <h1> {props.value}</h1>
        <p>{props.children}</p>

        </>
    )

}
export default ChildComponent


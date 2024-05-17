import CustomCard from "./reactBootstrap/card"

const FirstPage=()=>{
    return(
        <>
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <CustomCard name={"manojKUmar"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} ImageUrl={"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"}/>
      </div>
      <div className="col-sm-4">
      <CustomCard name={"Nerella"}description={"Some quick example text to build on the card title and make up the bulk of the card's content."} ImageUrl={"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"}/>
      </div>
      <div className="col-sm-4">
      <CustomCard name={"Hasini"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}ImageUrl={"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"} />
      
      </div>
    </div>
  </div>
</>

        
        
        </>
    )
}
export default FirstPage
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../../contact";
import Settings from "../../settings";
import Home from "../../home";


const NavigationStack = () => {
     
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/contact" Component={<Contact/>}/>
        {/* <Route path="brand/:productID" Component={ProductDetail}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default NavigationStack
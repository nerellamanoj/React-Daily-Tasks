import { Component } from "react";
import axios from "axios";
import "../../index.css"

class ProductListing extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    document.title="hello Manoj"
    this.fetchdata();
  }

  fetchdata = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    // console.log(result);
    this.setState({
      products: result.data.products,
    });
  };

  render() {
    console.log(this.state.products, "log from render");
    return (
      <>
        <h3>ProductListing</h3>
        {this.state.products.length > 0 ? (
          <div className="productlisting">
            {this.state.products.map((eachobject) => {
                const {title,description,id,price,discountPercentage,thumbnail}=eachobject 
              return (
                <div className="cards" key={id}>
                    <h3>{id}</h3>
                  <h3>{title}</h3>
                 <img src={thumbnail} width={100} alt="manoj"/>
                  <h3>{description}</h3>
                  <h3>{discountPercentage}</h3>
                  <h3 style={{color:"red"}}>₹{price}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <h4>No products</h4>
        )}
      </>
    );
  }
}
export default ProductListing;
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import { useEffect, useState } from "react";
function Homepage() {
  let [products, setProducts] = useState([]);

  useEffect(async () => {
    let response = await fetch(
      `http://localhost:3000/api/v1/products?category=thuong-vy-yen`
    );
    let data = await response.json();
    console.log(data);
    setProducts((prev) => [...prev, ...data]);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="container">
        <div className="row">
          {products.map((e, i) => (
            <div className="col-3">
              <Product></Product>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;

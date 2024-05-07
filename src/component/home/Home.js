import { useEffect, useState } from "react";
import "./home.css";
const Home = () => {
  const [productData, setProductData] = useState([]);
  //   console.log(productData);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const response = fetch("https://fakestoreapi.com/products");
    response.then((res) => {
      let json = res.json();
      console.log(json);
      json.then((arr) => {
        let data = arr;
        setProductData(data);
        console.log(data);
      });
    });
  }
  return (
    <div className="items">
      {productData.map((item, index) => (
        <div className="grid-items">
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p className="desc">{item.description}</p>
          <div className="tagsitem">
            <p className="pricetag">Price :{item.price}</p>
            <p className="pricetag">Ada to Cart</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=dior&product_type=${name}`;
    fetch(url).then((response) => response.json().then(setData));
  }, [name]);

  return (
    <div className="App">
      <Title text="Dior Makeup Products" />
      <p>What Dior products are you looking for:</p>
      <Entry action={setName} />
      <Info name={name} data={data} />
      <img id="image" src="icon.png" alt="products" />
      <img id="image2" src="icon2.png" alt="products" />
    </div>
  );
}

import { useState, useEffect } from "react";
import "./FormBulid.css";

function FormBulid() {
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [bedroom, setcountBedroom] = useState("");
  const [bathroom, setcountBathroom] = useState("");
  const [price, setprice] = useState("");
  const [items, setitem] = useState(() => {
    const stored = localStorage.getItem("item");
    return stored ? JSON.parse(stored) : [];
  });

  const showimg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setimg(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newitem = {
      img,
      name,
      description,
      category,
      bedroom,
      bathroom,
      price,
    };
    console.log(newitem);
    setitem((items) => [...items, newitem]);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">image</label>
      <input type="file" id="image" onChange={(e) => showimg(e)}></input>

      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setname(e.target.value)}
      ></input>

      <label htmlFor="description">description</label>
      <input
        type="text"
        id="description"
        onChange={(e) => setdescription(e.target.value)}
      ></input>

      <label htmlFor="category">category</label>
      <input
        type="text"
        id="category"
        onChange={(e) => setcategory(e.target.value)}
      ></input>

      <label htmlFor="countBedroom">countBedroom</label>
      <input
        type="number"
        id="countBedroom"
        min="1"
        onChange={(e) => setcountBedroom(e.target.value)}
      ></input>

      <label htmlFor="countBathroom">countBathroom</label>
      <input
        type="number"
        id="countBathroom"
        min="1"
        onChange={(e) => setcountBathroom(e.target.value)}
      ></input>

      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        onChange={(e) => setprice(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
}

export default FormBulid;

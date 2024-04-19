import { useState, useEffect } from "react";
import axios from "axios";
import "./admincrud.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router";

function AminCrud() {
  const [itemsArray, setItemsArray] = useState([]);
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    checkUserLogin();
    getItemsClick();
  }, []);

  function checkUserLogin() {
    let userId = sessionStorage.getItem("USER_ID");
    if (userId == null || userId === undefined) {
      navigate("/Login");
    }
  }

  function getItemsClick() {
    let url = "http://localhost:3000/user";
    axios.get(url).then((resData) => {
      setItemsArray(resData.data);
    });
  }
  function addItemClick() {
    let itemObj = {
      category: category,
      itemname: itemName,
      price: price,
      image: image,
    };

    let url = "http://localhost:3000/user";
    axios.post(url, itemObj).then((resData) => {
      alert("New item details are inserted in server");
      getItemsClick();
    });

    clearFields();
  }
  function deleteItemClick(id) {
    let flag = window.confirm("Do you want to delete?");
    if (flag == false) {
      return;
    }
    let url = "http://localhost:3000/user/" + id;
    axios.delete(url).then((resData) => {
      alert("successfully deleted");
      getItemsClick();
    });
  }

  function selectItemClick(id) {
    let url = "http://localhost:3000/user/" + id;
    axios.get(url).then((resData) => {
      let itemObj = resData.data;
      setId(itemObj.id);
      setCategory(itemObj.category);
      setItemName(itemObj.itemname);
      setPrice(itemObj.price);
      setImage(itemObj.image);
    });
  }

  function updateItemClick() {
    let itemObj = {
      id: id,
      category: category,
      itemname: itemName,
      price: price,
      image: image,
    };

    let url = "http://localhost:3000/user/" + itemObj.id;
    axios.put(url, itemObj).then((resData) => {
      alert("Item details are updated in server");
      getItemsClick();
    });
  }

  function clearFields() {
    setId("");
    setCategory("");
    setItemName("");
    setPrice("");
    setImage("");
  }

  let resultArray = itemsArray.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.category}</td>
      <td>{item.itemname}</td>
      <td>{item.price}</td>
      <td>
        <img
          src={item.image}
          alt={item.itemname}
          style={{ width: "100px", height: "100px" }}
        />
      </td>
      <td>
        <a
          href="#"
          className="btn btn-success"
          onClick={() => selectItemClick(item.id)}
        >
          Select
        </a>{" "}
        |
        <a
          href="#"
          className="btn btn-danger"
          onClick={() => deleteItemClick(item.id)}
        >
          Delete
        </a>
      </td>
    </tr>
  ));
  return (
    <>
      <div>
        <NavBar />
        <div>
          <br />
          <h3 className="text-primary text-center mt-5 mb-4">
            <span className="fw-bold">Server Communication</span> using{" "}
            <span className="text-danger">AXIOS</span> (CRUD on JSON Server)
          </h3>
        </div>
        <hr />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
        </div>

        <div className="mb-3 ">
          <input
            type="button"
            className="btn btn-primary mr-2"
            value="Add Item"
            onClick={addItemClick}
          />
          <input
            type="button"
            className="btn btn-success mx-2"
            value="Update Item"
            onClick={updateItemClick}
          />
          <input
            type="reset"
            className="btn btn-secondary"
            value="Reset"
            onClick={clearFields}
          />
        </div>

        <hr />
        <br />
        <table className="table table-light  table-hover ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{resultArray}</tbody>
        </table>
      </div>
    </>
  );
}

export default AminCrud;

import { useEffect, useState } from "react";
import axios from 'axios';
import "./Customer.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";


function ProductsByCategory() {
    const [productsArray, setProductsArray] = useState([]);
    const {id} = useParams();
    const navigate=useNavigate();

    function checkUserLogin() {
        let userId = sessionStorage.getItem("USER_ID");
        if (userId == null || userId === undefined) {
          navigate("/Login");
        }
      }

    useEffect(() => {
        checkUserLogin();
        getProductsClick();
    }, []);

    function getProductsClick() {
        let url = "http://localhost:3000/user?category=" + id;
        axios.get(url).then((resData) => {
           setProductsArray(resData.data)
        });
    }

    let resultArray = productsArray.map((d, index) =>
        <div className="cart" key={index}>
            <span className="prdName">{d.itemname}</span>
            <img src={d.image} height={100} width="100" />
            <span className="prdPrice">₹{d.price}</span>
            <Link to={"/view/"+d.id}>view</Link>
            <br />
        </div>
    );

    return (
    
  <>
  <NavBar />
       {resultArray}
  
  </>
                
    
    
    );
}

export default ProductsByCategory;

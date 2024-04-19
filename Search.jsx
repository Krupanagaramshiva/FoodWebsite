import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3000/user").then((res) => {
            setItems(res.data);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    };
    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h3>{item.itemname}</h3>
                        <p>Category: {item.category}</p>
                        <p>Price: {item.price}</p>
                        <img src={item.image} alt={item.itemname} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;

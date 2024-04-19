import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const Admin = () => {

    const [data,setdata]=useState([]);

    useEffect(()=>
    {
        axios.get('http://localhost:3000/user')
        .then((res)=>setdata(res.data))
        .catch(error =>console.log(error))
    },[]
    )
  return (
   <>
   <div className='d-flex   flex-column  justify-content-center align-items-center bg-light vh-75'>
       <h1 className='text-danger p-3 ' >CRUD OPERATION</h1>
     <div className='w-75 rounded bg-white border shadow p-4'>

    <table className='table table=striped'>
        <thead className='bg-success text-white vh-10'>
            <th>ID</th>
            <th>ITEMS</th>
            <th>price</th>
             <th>image</th>
        </thead>
        <tbody>
            {
                data.map((d,i)=>
                (
                  <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.itemname}</td>
                  <td>{d.price}</td>
                  <td>
                <img src={d.image} width="100" alt='image'/>
                  </td>
                  
                  </tr>
                )
                )
            }
        </tbody>
    </table>
</div>
   </div>
   </>
  )
}
export default Admin

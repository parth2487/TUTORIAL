import React from 'react'

import {useState,useEffect} from 'react'



const UseEffect =()=>{
	const url="https://jsonplaceholder.typicode.com/photos"
	const [api,setapi]=useState([])
	useEffect(()=>{
		console.log("hiii")
		fetchData()
	},[])
	const fetchData =async()=>{
		const response=await fetch("https://fakestoreapi.com/products")
		const data=await response.json()
		console.log(data)
		setapi(data);
	}
return(
		// <p>{api}</p>
		<div>
  		<div class="container text-center">
  		<div class="row">
        {api.map((item) => (

 		 
 		 <div class="col-3">
         <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={item.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{item.category}</h5>
    <p className="card-text">{item.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  </div>

        ))}}
        </div>
     </div>
  </div>
	)
}

export default UseEffect
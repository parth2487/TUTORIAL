import React from 'react'

import {useState,useEffect} from 'react'

const Search =()=>{
		const url="https://jsonplaceholder.typicode.com/photos"
	const [api,setapi]=useState([])
	const [value1,setvalue]=useState("")
	useEffect(()=>{
		console.log("hiii")
		fetchData()
	},[])
	const fetchData =async()=>{
		const response=await fetch("https://jsonplaceholder.typicode.com/users")
		const data=await response.json()
		console.log(data)
		setapi(data);
	}
	console.log(value1)
	console.log(api.filter((e)=>e.name.toLowerCase().includes(value1)))
	return(
		<>
		<div className="container">
		<nav className="navbar navbar-light bg-light">
 <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setvalue(e.target.value)} />
    <button className="btn btn-outline-success my-2  my-sm-0" type="submit">Search</button>
</form>
</nav>
</div>
<div className="container">
{
	api.filter((e)=>e.name.toLowerCase().includes(value1)).map((item)=>(
		<p>{item.name}</p>
	))
}

</div>
</>
		)

}


export default Search;
import React from 'react'

import {useState,useEffect} from 'react'
import axios from "axios"



const Form =()=>{
	const [file,setfile]=useState()
	const [form,formset]=useState({
		fname:"",
		sname:"",
		email:"",
		password:"",
		gender:"",
		hobby:[],
		city:"",
		file:""
	})
	
	const [get,setget]=useState([]);

function handlefname(e){
		formset({
			...form,
			fname:e.target.value,
			
		})
		}
	

	const handlesname=(e)=>{
		formset({
			...form,
			sname:e.target.value,
			
		})
		}
	
const handleEmail=(e)=>{
		formset({
			...form,
			email:e.target.value,
			
		})
		}





const handlePassword=(e)=>{
		formset({
			...form,
			password:e.target.value,
			
		})
		}

const handleRadio=(e)=>{
	console.log(e.target.value)
		formset({
			...form,
			gender:e.target.value,
		})

		}


		const handleCheck=(e)=>{

	console.log(e.target.value)

		if(form.hobby.includes(e.target.value))
		{
			const k=new Array(e.target.value)
			formset({
			...form,
			hobby:form.hobby.filter(item=> !k.includes(item))
		})
		}
        else{
        	formset({
			...form,
			hobby:[...form.hobby,e.target.value]
		})
        }
		
        console.log(form.hobby)
		}


	const handleList=(e)=>{
			formset({
			...form,
			city:e.target.value
		})
			console.log(e.target.value)
		}



		const handlesubmit=async(e)=>{
			e.preventDefault();
		const res=	await fetch("http://localhost:8000/abc",{
				method:"POST",
    			body:JSON.stringify(form),
    			headers:{
    				'Content-Type':"application/json"
    			}
			})
		const data =await res.json();
		console.log(data)
		}

		
		const handleUpdate=async()=>
		{
			console.log("HIiiii")
			const res=await fetch("http://localhost:8000/abcd",{
				method:"POST",
				body:JSON.stringify(form),
				headers:{
    				'Content-Type':"application/json"
    			}
			})
		const data =await res.json();
		
		console.log(data)
		}


		const getData=async()=>{
		const res=await fetch("http://localhost:8000/abcc",{
				method:"GET",
			})
		const data =await res.json();
		// e.target.files[0]="hello fieb"
	const	k=document.getElementById("x");
	console.log(k.value)
		console.log(data)
		setget(data)
		}

	const handleDelete=async()=>{
		console.log("HIiiii")
			const res=await fetch("http://localhost:8000/abcde",{
				method:"POST",
				body:JSON.stringify(form),
				headers:{
    				'Content-Type':"application/json"
    			}
			})
		const data =await res.json();
		
		console.log(data)
	}


    const handlUpl=()=>{
    		const formData=new FormData();
	formData.append('file',file)
	console.log(formData)
	axios.post("http://localhost:8000/upload",formData).then(res=>{}).catch(er=>console.log("errr"))
    }


    const changeFile=(er)=>{
    	setfile(er.target.files[0])
    	console.log(er.target.files[0])
    }


  useEffect(()=>{
  		getData();
  },[])


  	

  	const handlegetting=(e)=>{
  		var s=form.fname;
  		get.map(usr=>{

  			if(usr.fname==s){
  				formset({
  					fname:s,
  					sname:usr.sname,
  					email:usr.email,
  					password:usr.password,
  					gender:usr.gender,
  					hobby:usr.hobby,
  					city:usr.city
  				})
  			}
  			})
  		// target.files[0]="my name"
  	}


	return (
		<>
		  Firstnamee
		  <input type="text" value={form.fname}  onChange={handlefname}/>
		  <br/>
		  <br/>
		  	SecondName
		  	<input type="text" value={form.sname} 	onChange={handlesname}/>
		  			  <br/>
		  <br/>
		  	Email
		  	<input type="email" value={form.email} 	onChange={handleEmail}/>
		  			  <br/>
		  <br/>
		  	Password
		  	<input type="password" value={form.password} 	onChange={handlePassword}/>
		  	<br/>
		  	<br/>
Gender
<br/>
		  	<br/>
<input type="radio" value="male" name="gender" checked={"male"===form.gender}	onChange={handleRadio}/>Male


<input type="radio" value="female" name="gender" checked={"female"===form.gender}	onChange={handleRadio}/>Feamle

<input type="radio" value="transe" name="gender" checked={"transe"===form.gender}	onChange={handleRadio}/>Transe

 <br/>
		  <br/>
Hobby
<br/><br/>
<input type="checkbox" value="cricket" checked={form.hobby.includes("cricket")}	onChange={handleCheck}/>cricket
<br/><br/>
<input type="checkbox" value="football" checked={form.hobby.includes("football")}	onChange={handleCheck}/>football
<br/><br/>
<input type="checkbox" value="hockey" checked={form.hobby.includes("hockey")} onChange={handleCheck}/>hockey
<br/><br/>
<input type="checkbox" value="gundagiri" checked={form.hobby.includes("gundagiri")}	onChange={handleCheck}/>gundagiri

<br/><br/>
City
<br/><br/>
<select onChange={handleList}>

<option value="" >Pease Select</option>
<option value="keshod">Keshod</option>
<option value="junagadh" selected={form.city==="junagadh"}>Junagadh</option>
<option value="surat">Surat</option>
</select>
<br/><br/>

<input type="file" onChange={changeFile} id="x"/>
<button type="Upload" onClick={handlUpl}>Upload</button>
<br/><br/>
<button type="Delete" onClick={handleDelete}>Delete</button>

<br/><br/>

		  <button type="submit" onClick={handlesubmit}>Submit</button>
		  <br/>
		  <br/>
		  <button type="get" onClick={handlegetting}>get</button>
		  <br/>
		  <br/>
		  <button type="Update" onClick={handleUpdate}>Update</button>
		  <div>
		  <ul>
		  	{get.map(usr=><li>{usr.fname}</li>)}
		  </ul>
		  </div>
		</>

		)
}

export default Form
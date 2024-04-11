import React from 'react'
import axios from "axios"
import {useState,useEffect} from 'react'



const FileUploader =()=>{
	const [file,setfile]=useState();
const handleEvent=(e)=>{
setfile(e.target.files[0])
console.log(file)
}

const handle=()=>{
	const formData=new FormData();
	formData.append('file',file)
	console.log(formData)
	axios.post("http://localhost:3001/upload",formData).then(res=>{}).catch(er=>console.log("errr"))
}

return(
	<>
<input type="file" onChange={handleEvent}/>
<br/><br/>
<button onClick={handle} >Upload</button>
</>
)

}


export default FileUploader
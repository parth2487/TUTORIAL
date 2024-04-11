import {v2 as cloudinary} from "cloudinary"
import fs from fs


          
cloudinary.config({ 
  cloud_name: 'dq1botans', 
  api_key: '783392453173221', 
  api_secret: 'EnOLw8skrUGv1J7eKZGfdQQp0Mo' 
});


const uploadOnCloudinary = async (localFilePath)=>{
	try{
		if(!localFilePath){
			return null
		}
	const res=await cloudinary.uploader.upload(localFilePath,{
			resource_type:"auto"
		})
		console.log("file is uploaded in cloudianry")
		console.log(res)
	}
	catch(err)
	{

	}
}


cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
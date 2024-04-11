const express=require("express")
const cors=require("cors")
const SendEmail=require("./SendEmail")
const multer  = require('multer')
const nodemailer = require("nodemailer");
const app=express()


app.use(cors())
app.use(express.json())



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  return  cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    
   return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage: storage })


app.post("/upload",upload.single('file'),(req,res)=>{
	console.log(req.body)
	// console.log(req.file)
	console.log(req.file)
})

// app.get("/",(req,res)=>{
// 	res.send("I am server")
// })


// // app.get("/sendEmail",SendEmail)

// const start=async()=>{
// 	try{
// 		
// 		)
// 	}
// 	catch(err){
// 		console.log("No possibles")
// 	}
// }


app.listen(3001,()=>{
 			console.log("I am live t 8000")
 		})



const express=require("express")
const cors=require("cors")
const multer  = require('multer')
const mongoose =require("mongoose")
const bodyParser=require("body-parser")
const validator=require("validator")
const server=express()
server.use(cors())
server.use(bodyParser.json())
// server.use(express.urlencoded({extended:false}))



mongoose.connect("mongodb://127.0.0.1:27017/form")
.then(()=>console.log("Connected yes!!!!!!!!"))
.catch((err)=>console.log("no no no!!!!"))




server.use(express.json())



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  return  cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    
   return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage: storage })






















const formSchema=new mongoose.Schema({
	fname:String,
	sname:String,
	email:{
		type:String,
		required:true,
		validate(value)
		{
			if(!validator.isEmail(value))
			{
				throw new Error("not possible bro")
			}
		}
	},
	password:String,
	gender:String,
	hobby:[],
	city:String,
    file:String,
})


const Form2=new mongoose.model("Form2",formSchema)

let k=null;
server.post("/abc",async(req,res)=>{
	// res.send("parth")
	// res.json(req.body)
	// console.log(req.file)
	req.body['file']=k
	const aps=new Form2(req.body)
	
	const result=await aps.save()
	console.log(result)
	res.json(result)
	console.log(req.body)
})

server.get("/abcc",async(req,res)=>{
		const docs=await Form2.find({});
		res.json(docs)
})

server.post("/abcd",async(req,res)=>{
		const docs=await Form2.updateOne({fname:req.body.fname}, req.body);
		res.json(docs)
})

server.post("/abcde",async(req,res)=>{
		const docs=await Form2.deleteMany({fname:req.body.fname});
		res.json(docs)
})






server.post("/upload",upload.single('file'),(req,res)=>{
	// console.log(req.body)
	// console.log(req.file)
	console.log(req.file.path)
	k=req.file.path
	req.file['abc']="gogogogo"
	console.log(req.file)
})








server.listen(8000,()=>{
	console.log("server start")
})
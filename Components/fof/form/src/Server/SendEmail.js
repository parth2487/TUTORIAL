const nodemailer = require("nodemailer");
const GnerateOtp=require("./GnerateOtp")

async function SendEmail(){
const transporter=	nodemailer.createTransport(
	{
		service:"gmail",
		auth:{
			user:"parthranipa12@gmail.com",
			pass:"vcmvhuslzfnmuard"
		}
	})
	
	const otp=GnerateOtp;
	const mailoption={
		from:"parthranipa12@gmail.com",
		to:"21cp082@bvmengineering.ac.in",
		subject:"Otp from parth",
		text:`OTP is ${otp}`
	}


	try{
		const result=await transporter.sendMail(mailoption)
		console.log("Successfully")
	}
	catch(err)
	{
		console.log("not possible.................!!!!!!!!!!!!! ",err)
	}
}


SendEmail()
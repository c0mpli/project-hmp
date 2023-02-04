const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
const config = require("../config");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const moment = require("moment");
const Appointment = require("../models/Appointment")
const isUser = require("../middlewares/isUser");
const Partner = require("../models/Partner");
const isSuperAdmin = require("../middlewares/isSuperAdmin");
const Program = require("../models/Program");

router.post("/userregister", async (req, res) => {
	const password = req.body.password;
	const email=req.body.email;
	const firstname=req.body.firstname;
	const lastname=req.body.lastname;
	const confPassword=req.body.confPassword;
	const mobilenum=req.body.mobilenum;
	const admin=false;
	const superadmin=false;

	if (!password || !email || !firstname || !lastname || !confPassword || !mobilenum)
		return res.status(400).send("One or more of the fields are missing.");

	//checking for multiple accounts for a single email
	const emailcheck= await User.find({email:email});
	if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");

	if(password!=confPassword) return res.status(400).send("Password and Confirm Password do not match");

	// add user
	bcrypt.hash(password, saltRounds, async function(err, hash) {
		const newUser = new User({password:hash, firstname,lastname,email,mobilenum,admin,superadmin });
		return res.json(await newUser.save());
	});
	
});

router.post("/userlogin", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).send("Missing email or password");

	// checking if email exists
	const emails = await User.find({ email: email });
	if (emails.length === 0) return res.status(400).send("Email is incorrect");

	const user = emails[0];

	bcrypt.compare(password, user.password, async function(err, result) {
		if(result==false) return res.status(400).send("Incorrect password");

		// sending token
		const token =jwt.sign(
		{
			id: user._id,
		},
		config.jwtSecret,{expiresIn:"1d"}
		);
		res.setHeader("token", token);
		res.json({ token });
	});
});

//Update course progress
router.post("/updatecourseprogress", isUser, async (req, res) => {
	//IF NEEDED CHECK IF WEEK<WEEK DAY<DAY ETC
	const userId=req.auth.user._id;
	const courseId=req.body.courseId;
	const courseName=req.body.courseName;
	const percentage=0;
	const week=req.body.week;
	const day=req.body.day;
	const videoindex=req.body.videoindex;
	const foundUser=await User.findOne({_id:userId});
	var courseprogress=foundUser.courseprogress;
	
	var foundCourseIndex = courseprogress.findIndex(instance => instance.courseId === courseId);
	// if(foundCourseIndex==-1)
	// {

	// 	courseprogress.push({percentage:percentage,courseId:courseId,courseName:courseName,week:weekstructure});
	// 	const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:courseprogress},{new:true});
	// 	return res.json(updatedUser);
	// }
	// else{

		courseprogress[foundCourseIndex]={percentage:percentage,courseId:courseId,courseName:courseName,week:week,day:day,videoindex:videoindex};
		const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:courseprogress},{new:true});
		return res.json(updatedUser);
	// }




});

//Get course progress
router.get("/getcourseprogress", isUser, async (req, res) => {
	// try{
	const user=await User.findOne({_id:req.auth.user._id});
	const courseProgress=user.courseprogress;
	console.log(courseProgress)

	courseProgress.forEach(async(object) => {
		//DEBUG
		console.log("inside for each");
		const program = await Program.findOne({ _id: object.courseId });
		const totalduration=parseInt(program.duration);
		const intweek=parseInt(object.week);
		const intday=parseInt(object.day);
		object.percentage = (((intweek * 7)+intday) / (totalduration*7)) * 100;
		console.log(object.percentage);
		await User.updateOne({_id: object.courseId}, {$set: {percentage: object.percentage}})
		
	  });
	  
	  res.status(200).send({
		message: "Course progress fetched successfully",
		success: true,
		data: courseProgress
	  });
	// }
	// catch(error){
	// 	res.status(500).send({
	// 		message: "Error fetching course progress",
	// 		success: false,
	// 		error,
	// 	  });
	// }
	  
});

	




//Display all the doctors
router.get("/get-all-approved-doctors", isUser, async (req, res) => {
	try {
	  const doctors = await Partner.find();
	  res.status(200).send({
		message: "Doctors fetched successfully",
		success: true,
		data: doctors,
	  });
	} catch (error) {
	  console.log(error);
	  res.status(500).send({
		message: "Error applying doctor account",
		success: false,
		error,
	  });
	}
  });

//Book appointments
  router.post("/book-appointment", isUser, async (req, res) => {
	// try {
	  req.body.status = "pending";
	  req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
	  req.body.time = moment(req.body.time, "HH:mm").toISOString();
	  const newAppointment = new Appointment(req.body);
	  await newAppointment.save();
	  res.status(200).send({
		message: "Appointment booked successfully",
		success: true,
	  });
	// } catch (error) {
	//   console.log(error);
	//   res.status(500).send({
	// 	message: "Error booking appointment",
	// 	success: false,
	// 	error,
	//   });
	// }
  });
//Check Availability
  router.post("/check-booking-avilability", isUser, async (req, res) => {
	try {
	  const date = moment(req.body.date, "DD-MM-YYYY").toISOString();
	  const fromTime = moment(req.body.time, "HH:mm")
		.subtract(1, "hours")
		.toISOString();
	  const toTime = moment(req.body.time, "HH:mm").add(1, "hours").toISOString();
	  const doctorId = req.body.doctorId;
	  const appointments = await Appointment.find({
		doctorId,
		date,
		time: { $gte: fromTime, $lte: toTime },
	  });
	  if (appointments.length > 0) {
		return res.status(200).send({
		  message: "Appointments not available",
		  success: false,
		});
	  } else {
		return res.status(200).send({
		  message: "Appointments available",
		  success: true,
		});
	  }
	} catch (error) {
	  console.log(error);
	  res.status(500).send({
		message: "Error booking appointment",
		success: false,
		error,
	  });
	}
  });
  //Get appointments 
  router.get("/get-appointments-by-user-id", isUser, async (req, res) => {
	try {
	  const appointments = await Appointment.find({ userId: req.auth.user._id });
	  res.status(200).send({
		message: "Appointments fetched successfully",
		success: true,
		data: appointments,
	  });
	} catch (error) {
	  console.log(error);
	  res.status(500).send({
		message: "Error fetching appointments",
		success: false,
		error,
	  });
	}
  });

  //Change password
  router.post("/change-password", isUser, async (req, res) => {
		const { oldPassword, newPassword } = req.body;
		const hashedPassword = req.auth.user.password;
		const userId = req.auth.user._id;
		bcrypt.compare(oldPassword,hashedPassword, function(err, isMatch) {
			if (err) throw err;
			if (isMatch) {
				//password matched
				bcrypt.hash(newPassword, saltRounds, async function(err, hash) {
					const user = await User.findByIdAndUpdate(
					  userId,
					  { password: hash }
					);
					res.status(200).send({
					  message: "Password changed successfully",
					  success: true,
					  data: user,
					});
				  });
			} else {
				//password not matched
				res.status(200).send({
					message: "Password not matched",
					success: false,
				  });
			}
		  })
	});

					



  

module.exports = router;

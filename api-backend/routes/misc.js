const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds=10;
const isAdmin = require("../middlewares/isAdmin.js");






router.post("/addsuperadmin", async (req, res) => {
	const password = req.body.password;
	const email=req.body.email;
	const firstname=req.body.firstname;
	const lastname=req.body.lastname;
	const confPassword=req.body.confPassword;
	const mobilenum=req.body.mobilenum;
	const admin=true;
	const superadmin=true;

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



//DISCARDED ROUTES BELOW

// Update course progress
// router.post("/updatecourseprogress", isUser, async (req, res) => {
// 	//IF NEEDED CHECK IF WEEK<WEEK DAY<DAY ETC
// 	const userId=req.auth.user._id;
// 	const courseId=req.body.courseId;
// 	const courseName=req.body.courseName;
// 	const percentage=0;
// 	const week=req.body.week;
// 	const day=req.body.day;
// 	const videoindex=req.body.videoindex;
// 	const foundUser=await User.findOne({_id:userId});
// 	var courseprogress=foundUser.courseprogress;
	
// 	var foundCourseIndex = courseprogress.findIndex(instance => instance.courseId === courseId);
// 	if(foundCourseIndex==-1)
// 	{

// 		courseprogress.push({percentage:percentage,courseId:courseId,courseName:courseName,week:weekstructure});
// 		const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:courseprogress},{new:true});
// 		return res.json(updatedUser);
// 	}
// 	else{

// 		courseprogress[foundCourseIndex]={percentage:percentage,courseId:courseId,courseName:courseName,week:week,day:day,videoindex:videoindex};
// 		const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:courseprogress},{new:true});
// 		return res.json(updatedUser);
// 	}

// });


// Update course progress
// router.post("/updatecourseprogress", isUser, async (req, res) => {
// 	const userId=req.auth.user._id;
// 	const foundUser=await User.findOne({_id:userId});
// 	const videoindex=parseInt(req.body.videoindex);
// 	const weeknum=parseInt(req.body.weeknum) ;
// 	const daynum=parseInt(req.body.daynum);
// 	const courseId=req.body.courseId;


// 	var courseprogress=foundUser.courseprogress;

// 	var foundCourseIndex = courseprogress.findIndex(instance => instance.courseId === courseId);
	
// 	if(foundCourseIndex==-1)
// 	{
// 		// if(!weeknum&&!daynum&&!videoindex)
// 		// {

// 		// }
// 		// else{
// 		// 	const structure={};
// 		// structure.courseId=courseId;
// 		// structure.progress=[];
// 		// var videoarr=[];
// 		// videoarr.push(videoindex);
// 		// var weekstruct={
// 		// 	weeknum:weeknum,
// 		// 	days:[{
// 		// 		daynum:daynum,
// 		// 		videos:videoarr
// 		// 	}]
// 		// };
		
// 		// structure.progress.push(weekstruct);
// 		// structure.percentage=0;

// 		// courseProgress.push(structure);
// 		// const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:courseProgress},{new:true});
// 		// return res.json(updatedUser);
// 		// }

		

// 		courseprogress.push({
// 			courseId:courseId,
// 			progress:[]
// 		})
// 		const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:courseprogress},{new:true});
// 		res.json(updatedUser);
		
// 	}
// 	else{
// 		// var currentcourse=courseprogress[foundCourseIndex];
// 		var newcourseprogress=courseprogress;
// 		var currentcourseprogress=newcourseprogress[foundCourseIndex].progress;
// 		var foundweek = currentcourseprogress.findIndex(instance => instance.weeknum === weeknum);
// 		if(foundweek==-1)
// 		{
// 			currentcourseprogress.push({
// 				weeknum:weeknum,
// 				days:[{
// 					daynum:daynum,
// 					videos:[videoindex]
// 				}]
// 			});

// 			currentcourseprogress.sort((a,b)=>a.weeknum-b.weeknum);		
// 			const updatedUser=await User.findOneAndUpdate({_id:userId},{courseprogress:newcourseprogress},{new:true});
// 			res.json(updatedUser);

// 		}
// 		else{
// 			currentcourseprogress[foundweek]
// 		}
// 	}

	// var courseProgressArray = Object.values(JSON.parse(courseProgress));
	// console.log(courseProgressArray)
	// var foundweek = courseProgressArray.findIndex(instance => instance.weeknum === );

// });

// Get course progress
// router.post("/getcourseprogress", isUser, async (req, res) => {
	

// });

  module.exports = router;

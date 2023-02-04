const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds=10;
const isAdmin = require("../middlewares/isAdmin.js");


//get course details
router.get("/getcoursedetails",isAdmin , async (req, res) => {
    try {
      
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });



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




  module.exports = router;

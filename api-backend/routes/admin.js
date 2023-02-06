const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds=10;
const isAdmin = require("../middlewares/isAdmin.js");
const Program = require("../models/Program.js");
const Partner=require("../models/Partner");
const isHealthPartner = require("../middlewares/isHealthPartner.js");


//delete a course
router.post("/deletecourse",isAdmin , async (req, res) => {
    try {
      const courseId=req.body.courseId;
      res.json(await Program.deleteOne({_id:courseId}));

    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });


//add a course
router.post("/addnewcourse",isAdmin , async (req, res) => {
    try {
      req.body.videos = new Array(req.body.duration).fill({day:[[],[],[],[],[],[],[]]});
      //structure of videos:
      // [{day:[[link1,link2,link3....link7]]}]
        const newProgram=new Program(req.body);
        
      res.json(await newProgram.save());
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

  //add to existing course
router.post("/addtoexistingcourse",isAdmin , async (req, res) => {
    // try {
      const coursetitle=req.body.coursetitle;
      var week=req.body.week;
      week=parseInt(week)-1;
      const day=parseInt(req.body.day)-1;
      const link=req.body.link;

      const  foundCourse = await Program.findOne({programname: coursetitle});
      var newDayArray=foundCourse.videos[week].day[day];
      newDayArray.push(link);
      //const  foundCourse = await Program.findOneAndUpdate({programname: coursetitle}, {$set: {`videos.${week}.day.${day}`: link}}, {new: true}).select('programname videos').exec();
      const updatedCourse=await Program.findOneAndUpdate({ programname: coursetitle }, { $set: { [`videos.${week}.day.${day}`]: newDayArray } }, { new: true });
      return res.send({
          message: "Added to existing course",
          success: true,
          data: updatedCourse,
        });

    // } catch (error) {
    //   res.send({
    //     message: error.message,
    //     success: false,
    //     data: null,
    //   });
    // }
  });

//changecoursedetails
router.post("/changecoursedetails",isAdmin , async (req, res) => {
    try {
      const coursetitle=req.body.coursetitle;
      const duration=req.body.duration;
      const description=req.body.description;
      const id=req.body.id;
      var courseBeforeupdate=await Program.findOne({_id:id});
      var videos =courseBeforeupdate.videos;
      var diff=parseInt(duration) -videos.length;
      var tobeaddedarray=new Array(diff).fill({day:[[],[],[],[],[],[],[]]});
      videos = videos.concat(tobeaddedarray);
   
      const updatedCourse=await Program.findByIdAndUpdate(id, { $set: {videos:videos, progamname : coursetitle,duration:duration,description:description } }, { new: true });

      res.json(updatedCourse);



    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

  //register a new partner
router.post("/addhealthp",isAdmin , async (req, res) => {
  // try {
    const existingPartner = await Partner.findOne({ email: req.body.email });
    
    if (existingPartner) {
      return res.send({
        message: "Partner already exists",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const newPartner = new Partner(req.body);
    await newPartner.save();
    res.send({
      message: "Partner created successfully",
      success: true,
      data: null,
    });
  // } catch (error) {
  //   res.send({
  //     message: error.message,
  //     success: false,
  //     data: null,
  //   });
  // }
});

//Delete a Health Partner
router.post("/deletehealthp", isAdmin, async (req, res) => {
  try {
    await Partner.findByIdAndDelete(req.body._id);
    return res.status(200).send({
      success: true,
      message: "HealthPartner deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

//get course details
router.get("/getcoursedetails",isAdmin , async (req, res) => {
    try {
      res.json(await Program.find({}));
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });
  module.exports = router;

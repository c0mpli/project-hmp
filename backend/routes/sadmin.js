const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isSuperAdmin = require("../middlewares/isSuperAdmin.js");
const saltRounds=10;
const Message=require("../models/Message");


//register a new admin
router.post("/addadmin",isSuperAdmin , async (req, res) => {
    try {
      const existingAdmin = await User.findOne({ email: req.body.email });
      if (existingAdmin) {
        return res.send({
          message: "Admin already exists",
          success: false,
          data: null,
        });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashedPassword;
      req.body.admin=true;
      req.body.superadmin=false;
      const newAdmin = new User(req.body);
      await newAdmin.save();
      res.send({
        message: "Admin created successfully",
        success: true,
        data: null,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

//delete admin
router.post("/deleteadmin", isSuperAdmin, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.body._id);
      return res.status(200).send({
        success: true,
        message: "Admin deleted successfully",
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });


  // //broadcast message
  // router.post("/broadcastmsg", isSuperAdmin, async (req, res) => {
  //   // try {
  //     const message=req.body.message;
  //     const timestamp=Date.now();
  //     const newMessage=new Message(message,timestamp);
  //     await newMessage.save();
  //     res.send({
  //       message:"Message broadcasted succesfully",
  //       success:true,
  //       data:null,
  //     });
  // //   } catch (error) {
  // //     res.status(500).send({ success: false, message: error.message });
  // //   }
  // });

  //broadcast message
  router.post("/broadcastmsg", isSuperAdmin, async (req, res) => {
    try {
      const message=req.body.message;
      const newMessage = new Message({message});
      await newMessage.save();
      res.send({
        message:"Message broadcasted succesfully",
        success:true,
        data:null,
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });



      

  //delete broadcast message
  router.post("/deletemessage", isSuperAdmin, async (req, res) => {
    try {
      await Message.findByIdAndDelete(req.body._id);
      return res.status(200).send({
        success: true,
        message: "Message deleted successfully",
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });

  //get all broadcast messages
  router.get("/getmessages", isSuperAdmin, async (req, res) => {
    try {
      const messages = await Message.find();
      return res.status(200).send({
        success: true,
        message: "Messages fetched successfully",
        data: messages,
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  });
  module.exports = router;

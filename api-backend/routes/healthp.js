const router = require("express").Router();
const Partner = require("../models/Partner.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAdmin = require("../middlewares/isAdmin.js");
const saltRounds=10;
const isHealthPartner = require("../middlewares/isHealthPartner.js");
const config = require("../config");
const Appointment=require("../models/Appointment");

  router.post("/loginhealthp", async (req, res) => {
    try {
      const userExists = await Partner.findOne({ email: req.body.email });
      if (!userExists) {
        return res.send({
          message: "User does not exist",
          success: false,
          data: null,
        });
      }
   
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userExists.password
      );
  
      if (!passwordMatch) {
        return res.send({
          message: "Incorrect password",
          success: false,
          data: null,
        });
      }
      //here we are encrypting the userId and sending it as a token
      const token = jwt.sign({ id: userExists._id }, config.jwtSecret, {
        expiresIn: "1d",
      });
  
      res.send({
        message: "User logged in successfully",
        success: true,
        data: token,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

//get doctors info
router.get("/get-doctor-info-by-doctor-id", isHealthPartner , async (req, res) => {
  try {
    const doctor = await Partner.findOne({ _id: req.auth.partner._id });
    res.status(200).send({
      success: true,
      message: "Doctor info fetched successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
});

//update doctor's profile
router.post("/update-doctor-profile", isHealthPartner, async (req, res) => {
  try {
    const doctor = await Partner.findOneAndUpdate(
      { _id: req.auth.partner._id },
      req.body,{new:true}
    );
    res.status(200).send({
      success: true,
      message: "Doctor profile updated successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
});

//check appointments
router.get(
  "/get-appointments-by-doctor-id",
  isHealthPartner,
  async (req, res) => {
    try {
      const doctor = await Partner.findOne({ _id: req.auth.partner._id });
      const appointments = await Appointment.find({ doctorId: doctor._id });
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
  }
);

//change appointment status
router.post("/change-appointment-status", isHealthPartner, async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, {
      status,
    });

    // const user = await User.findOne({ _id: appointment.userId });
    // const unseenNotifications = user.unseenNotifications;
    // unseenNotifications.push({
    //   type: "appointment-status-changed",
    //   message: `Your appointment status has been ${status}`,
    //   onClickPath: "/appointments",
    // });

    // await user.save();

    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error changing appointment status",
      success: false,
      error,
    });
  }
});


  module.exports = router;
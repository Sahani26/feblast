const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// Add a new service
router.post("/add", async (req, res) => {
  try {
    const { name, charge } = req.body;
    const newService = new Service({ name, charge });
    await newService.save();
    res.status(201).json({ message: "Service added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

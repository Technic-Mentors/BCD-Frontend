const express = require("express");
const router = express.Router();
const Admin = require("../Schema/Admin");
const Event = require("../Schema/Event");
const bcrypt = require("bcrypt");

const adminUser = {
  email: "bcdservices@gmail.com",
  password: "$2b$10$6goSXpJMLHf2ftLq3Vm14.wtCPoWj6jz7w0ZBr6UJi6o3jFJikA6e",
};

router.post("/createadmin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== adminUser.email) {
      return res.status(400).json({ error: "invalid credentials" });
    }
    const checkPassword = await bcrypt.compare(password, adminUser.password);
    if (!checkPassword) {
      return res.status(400).json({ error: "invalid credentials" });
    }
    const checkEmail = await Admin.findOne({ email: adminUser.email });
    if (checkEmail) {
      return res.status(400).json({ error: "admin user already created" });
    }
    const newUser = await Admin.create(adminUser);
    res.json({ success: true, user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminData = await Admin.findOne({ email });
    if (!adminData) {
      return res.status(400).json({ error: "invalid credentials" });
    }
    const isPasswordMatch = await bcrypt.compare(password, adminData.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "invalid credentials" });
    }
    res.json(adminData);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.post("/createevent", async (req, res) => {
  try {
    const { title, postedby, description, link } = req.body;
    const NewsEvent = await Event.create({
      title,
      postedby,
      description,
      link,
    });
    res.json(NewsEvent);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.get("/getevent", async (req, res) => {
  try {
    const allEvents = await Event.find();
    res.json(allEvents);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.get("/getevent/:id", async (req, res) => {
  try {
    const getEvent = await Event.findById(req.params.id);
    if (!getEvent) {
      return res.status(400).json({ message: "news not found" });
    }

    res.json(getEvent);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.put("/editevent/:id", async (req, res) => {
  try {
    const { title, postedby, description, link } = req.body;

    const newEvent = {};
    if (title) {
      newEvent.title = title;
    }
    if (postedby) {
      newEvent.postedby = postedby;
    }
    if (description) {
      newEvent.description = description;
    }
    if (link) {
      newEvent.link = link;
    }

    let editEvent = await Event.findById(req.params.id);
    if (!editEvent) {
      return res.status(400).json({ message: "news not found" });
    }

    editEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: newEvent },
      { new: true }
    );
    res.json(editEvent);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.delete("/delevent/:id", async (req, res) => {
  try {
    const allEvents = await Event.findByIdAndDelete(req.params.id);
    if (!allEvents) {
      return res.status(400).json({ message: "news not found" });
    }
    res.json({ message: "News deleted successfuly" });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.get("/getevent/:id", async (req, res) => {
  try {
    const getUser = await Event.findOne(req.params.id);
    if (!getUser) {
      return res.status(400).json({ message: "user not found" });
    }
    res.json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.put("/changePassword", async (req, res) => {
  const { email, oldpassword, newpassword } = req.body;
  try {
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    
    const checkPassword = await bcrypt.compare(oldpassword, user.password);
    if (!checkPassword) {
      return res.status(400).json({ error: "old Password does not match" });
    }
    const newPassword = await bcrypt.hash(newpassword, 10);
    user.password = newPassword;
    await user.save();
    res.json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("inernal server error");
  }
});

module.exports = router;

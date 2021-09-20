const express = require("express");

const router = express.Router();

const Forms = require("../model/form.model");

router.get("/", async (req, res) => {
  try {
    const forms = await Forms.find({}).populate("url").lean().exec();

    res.status(200).json({ forms });
  } catch (err) {
    res.status(500).json({ status: "failed", err: err.message });
  }
});

// by id
router.get("./:id", async (req, res) => {
  const { id } = req.params;

  try {
    const forms = await Forms.findById(id).populate(["url"]);

    res.status(201).json({ forms: forms });
  } catch (err) {
    res.status(500).json({ status: "failed", err: err.message });
  }
});

// to add new forms
router.post("/new", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const newforms = await Forms.create(req.body);
    res.status(201).json({ newforms });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// to update by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(req.body);
  console.log(id);
  try {
    const changeForm = await Forms.findByIdAndUpdate(id, {
      url: req.body.url,
    });

    res.status(201).json({ status: "success", forms: changeForm });
  } catch (error) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hi There!"
  });
});

module.export = router;

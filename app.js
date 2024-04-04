const express = require("express");
const router = express.Router();

const homePage = (req, res) => {
  res.send("Wiki homepage")
};

const testicle = (req, res) => {
  const page = require("./testicle");
  res.send(page)
}

router.get("/", homePage);
router.get("/test", testicle);


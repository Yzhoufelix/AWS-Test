var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET users listing. */
router.get("/", function(req, res, next) {
  axios
    .get("http://")
    .then(res => {
      if (Math.random() > 0.5) {
        console.log(res.data);
        res.send({ yifei: "hi", ...Response.dta });
      } else {
        res.status(500).send({ message: "Error happend at yifei" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

module.exports = router;

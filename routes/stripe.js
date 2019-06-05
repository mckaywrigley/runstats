const express = require("express");
const router = express.Router();
const stripeKey = require("../config/keys").stripeSecret;

// const stripe = require("stripe")("pk_test_qPNK6zUKkyinAbXNevRbSiud00j8QTrbdi");
const stripe = require("stripe")(stripeKey);

router.post("/monthly", (req, res) => {
  stripe.charges
    .create({
      amount: 5000,
      currency: "usd",
      source: "tok_visa"
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

module.exports = router;

const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
    key_id: "YOUR_KEY",
    key_secret: "YOUR_SECRET"
});

router.post("/create-order", async (req, res) => {
    const options = {
        amount: 50000,
        currency: "INR"
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
});

module.exports = router;
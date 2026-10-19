const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});
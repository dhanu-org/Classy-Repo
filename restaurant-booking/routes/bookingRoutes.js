const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// CREATE booking
router.post("/", async (req, res) => {
    try {
        const { date, time } = req.body;

        // Prevent double booking
        const existing = await Booking.findOne({ date, time });
        if (existing) {
            return res.status(400).json({ message: "Slot already booked" });
        }

        const booking = new Booking(req.body);
        await booking.save();

        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ all bookings
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE booking
router.put("/:id", async (req, res) => {
    try {
        const updated = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE booking
router.delete("/:id", async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: "Booking deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
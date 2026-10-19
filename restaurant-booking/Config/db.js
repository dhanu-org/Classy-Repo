const bookingSchema = new mongoose.Schema({
    userId: String,
    date: String,
    time: String,
    guests: Number
});
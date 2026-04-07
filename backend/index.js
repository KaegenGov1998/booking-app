const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let bookings = [];

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.post("/book", (req, res) => {
  const { name , date, time } = req.body;

  if (!name || !date || !time) {
    return res.status(400).json({ error: "Values is missing" });
  }

  const searchBookings = bookings.find((f) => 
     f.time  === time && f.date === date
  )

  if(searchBookings){
    return res.status(400).json({error: "Booking of this Time and Date already Exists in Array"})
  }
  else{
  bookings.push({name, date, time});

  res.json({
    message: "Booking added",
    bookings: bookings
  });
  }
});

app.put("/changeBooking/:index", (req, res) => {
  const index = req.params.index;
  const { name, date, time } = req.body;

  if (!bookings[index]) {
    return res.status(404).json({ error: "Booking not found" });
  }

  bookings[index] = {name, date, time};

  res.json({
    message: "Booking updated",
    bookings: bookings
  });
});

app.delete("/booking/:index", (req, res) => {
  const index = req.params.index;

  if (!bookings[index]) {
    return res.status(404).json({ error: "Booking not found" });
  }

  bookings.splice(index, 1);

  res.json({
    message: "Booking deleted",
    bookings: bookings
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
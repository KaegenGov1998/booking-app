import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://booking-app-brre.onrender.com/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        alert("Booking is taken. Please select another date and time");
        return;
      }

      await response.json();
      alert("Booking received. You may go back to bookings");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F0EA] p-2">
      <form
        onSubmit={handleSubmit}
        className="w-[800px] flex flex-col items-center p-5 gap-3 bg-[#FFFFFF] rounded-lg"
      >
        <h1>Add Booking</h1>

        <div className="w-full flex justify-around gap-3">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-[300px] bg-[#F4F0EA] rounded-md"
          />

          <input
            type="date"
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-[300px] bg-[#F4F0EA] rounded-md"
          />
        </div>

        {/* Keep your radio buttons as-is (they are fine) */}

        <button type="submit">Send Data</button>
      </form>
    </div>
  );
};

export default Booking;
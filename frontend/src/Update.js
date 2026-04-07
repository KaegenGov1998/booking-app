import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
  });

  const { index } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://booking-app-brre.onrender.com/changeBooking/${index}`,
        {
          method: "PUT",
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
      alert("Booking has been updated");
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
        <h1>Update Booking</h1>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />

        <input
          type="time"
          onChange={(e) =>
            setFormData({ ...formData, time: e.target.value })
          }
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
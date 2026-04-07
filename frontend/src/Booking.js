import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({ name: "", date: "", time: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${process.env.REACT_APP_API_URL}/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        alert('Booking is taken. Please select another date and time');
        return;
      }

      const result = await response.json();
      alert('Booking recieved, go may go back to bookings');
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen w-screen bg-[#F4F0EA] p-2">
      <form onSubmit={handleSubmit} className="w-[800px] flex flex-col justify-center items-center p-5 gap-3 border-none bg-[#FFFFFF] rounded-lg" >
        <h1>Add Booking</h1>
        <div className="w-full flex flex-row justify-around gap-3">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-[300px] bg-[#F4F0EA] rounded-md"
        ></input>

        <input
          type="date"
          placeholder="Date"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-[300px] bg-[#F4F0EA] rounded-md"
        ></input>
        </div>

        <div className="w-[600px] flex flex-wrap gap-2">
          <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            placeholder="08:00 : 09:00"
            value={"08:00 : 09:00"}
            checked={formData.time === "08:00 : 09:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          08:00 : 09:00
        </label></div>


        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            name="09:00 : 10:00"
            value={"09:00 : 10:00"}
            checked={formData.time === "09:00 : 10:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          09:00 : 10:00
        </label>
        </div>

        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            placeholder="10:00 : 11:00"
            value={"10:00 : 11:00"}
            checked={formData.time === "10:00 : 11:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          10:00 : 11:00
        </label>
        </div>

        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            placeholder="11:00 : 12:00"
            value={"11:00 : 12:00"}
            checked={formData.time === "11:00 : 12:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          11:00 : 12:00
        </label>
        </div>

        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            placeholder="13:00 : 14:00"
            value={"13:00 : 14:00"}
            checked={formData.time === "13:00 : 14:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          13:00 : 14:00
        </label>
        </div>

        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            name="14:00 : 15:00"
            value={"14:00 : 15:00"}
            checked={formData.time === "14:00 : 15:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          14:00 : 15:00
        </label>
        </div>

        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            placeholder="15:00 : 16:00"
            value={"15:00 : 16:00"}
            checked={formData.time === "15:00 : 16:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          15:00 : 16:00
        </label>
        </div>

        <div className="h-14 w-28 bg-[#C0573E] border-none rounded-md">
        <label>
          <input
            type="radio"
            placeholder="16:00 : 17:00"
            value={"16:00 : 17:00"}
            checked={formData.time === "16:00 : 17:00"}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          ></input>
          16:00 : 17:00
        </label>
        </div>

        </div>
        
        <div className="w-full flex justify-around">
        <button type="submit">Send Data</button>
        <a href="/">Go to bookings</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default Booking;
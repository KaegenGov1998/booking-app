import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("https://booking-app-brre.onrender.com/bookings")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const deleteBooking = async (index) => {
    try {
      const response = await fetch(`https://booking-app-brre.onrender.com/booking/${index}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#F4F0EA]">
      <div className="flex flex-col w-[800px] justify-center items-center gap-3 p-5 border-none bg-[#FFFFFF] rounded-lg">
        <div>
          <h1 className="text-4xl">Bookings</h1>
        </div>
        {backendData.length === 0 ? (
          <p>No Bookings logged</p>
        ) : (
          backendData.map((bookings, i) => (
            <div className="flex flex-col w-full">
              <p key={i} className="flex flex-col w-full">
                <div className="text-xl">{bookings.name}</div>
                <div className="flex flex-row w-full bg-slate-300 items-stretch">
                  <div
                    className="flex flex-col ">
                    <div className="text-[#611201]">Date</div>
                <div className="font-semibold">{bookings.date}</div>
                </div>
                <div className="
                    flex
                    flex-col"
                  >
                    <div className="text-[#611201]">Time</div>
                    <div className="font-semibold">{bookings.time}</div>
                  </div>
                </div>
              </p>
              <div className="flex justify-evenly">
                <Link
                  to={`update/${i}`}
                  className="border-none rounded-lg bg-[#C0573E] p-2 m-2"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteBooking(i)}
                  className="border-none rounded-lg bg-[#C0573E] p-2 m-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
        <Link to="/booking">Add a booking</Link>
      </div>
    </div>
  );
};

export default App;

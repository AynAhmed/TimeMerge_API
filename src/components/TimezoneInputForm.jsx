import React, { useState } from "react";

function TimezoneInputForm({ onSubmit }) {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);

  const handleAddLocation = () => {
    if (location.trim() !== "") {
      setLocations((prevLocations) => [...prevLocations, location.trim()]);
      setLocation("");
    }
  };

  const handleGetTime = () => {
    if (locations.length > 0) {
      onSubmit(locations);
    }
  };

  return (
    <div>
      <form >
        <label htmlFor="location">Enter Location:</label>
        <br />
        <input className="input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <button className ="form-btn one" type="button" onClick={handleAddLocation}>
          Add Location
        </button>
        <button className ="form-btn two" type="button" onClick={handleGetTime} disabled={locations.length === 0}>
          Get Time
        </button>
      </form>
    </div>
  );
}

export default TimezoneInputForm;

import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import TimezoneInputForm from "./TimezoneInputForm";
import TimeComparisonTable from "./TimeComparisonTable";
import TimezoneMap from "./TimezoneMap";

// The main component
function Api() {
  // State variables to store time data and error messages
  const [timeData, setTimeData] = useState([]);
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (locations) => {
    try {
      // Fetch time data for each location using Promise.all
      const timezoneDataPromises = locations.map(async (location) => {
        // Fetch latitude and longitude for the location from Nominatim search API
        const geocodeResponse = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location.trim())}`
        );

        // If location not found, return null
        if (geocodeResponse.data.length === 0) {
          return null;
        }

        // Extract latitude and longitude from the response
        const { lat, lon } = geocodeResponse.data[0];

        // Fetch time data based on the latitude and longitude from the TimeAPI
        const timeApiResponse = await axios.get(
          `https://www.timeapi.io/api/Time/current/coordinate?latitude=${lat}&longitude=${lon}`
        );

        // Extract timezone and date/time from the response
        const { dateTime, timeZone } = timeApiResponse.data;

        // Format the date/time into a user-friendly format
        return {
          timezone: timeZone,
          dateTime: new Date(dateTime).toLocaleString(),
          latitude: lat,
          longitude: lon,
        };
      });

      // Wait for all promises to resolve
      const timezoneData = await Promise.all(timezoneDataPromises);

      // Filter out any null values (locations not found)
      const filteredTimezoneData = timezoneData.filter((data) => data !== null);

      // Update the state with the time data
      setTimeData(filteredTimezoneData);
      setError("");
    } catch (err) {
      // If there's an error, show an error message
      setError("Error fetching time and location. Please check the locations and try again.");
    }
  };

  // Render the components and return JSX
  return (
    <div>
      {/* Render the Navbar */}
      <Navbar />

      {/* Render the TimezoneInputForm component */}
      <div className="form">
        <TimezoneInputForm onSubmit={handleSubmit} />
      </div>

      {/* Render the TimeComparisonTable component if there's time data */}
      <div className="time-table">
        {timeData.length > 0 && <TimeComparisonTable timeData={timeData} />}
      </div>

      {/* Render the TimezoneMap component if there's time data */}
      <div className="map-area">
        {timeData.length > 0 && <TimezoneMap timeData={timeData} />}
      </div>

      {/* Render an error message if there's an error */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Api;

import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function TimezoneMap({ timeData }) {
  React.useEffect(() => {
    const map = L.map("map").setView([0, 0], 3);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    timeData.forEach((data) => {
      const { latitude, longitude, timezone, dateTime} = data;
      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup(`${timezone}<br/>Time: ${dateTime}`).openPopup();
    });

    return () => {
      map.remove();
    };
  }, [timeData]);

  return <div id="map" style={{ height: "500px" }} />;
}

export default TimezoneMap;

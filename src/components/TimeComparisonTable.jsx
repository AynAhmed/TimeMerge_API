import React from "react";

function TimeComparisonTable({ timeData }) {
    function getDayOrNightEmoji(dateTime) {
        const hour = new Date(dateTime).getHours();
    if (hour >= 6 && hour < 18) {
      return "☀️"; // Sun emoji for daytime (6 AM to 5:59 PM)
    } else {
      return "🌙"; // Moon emoji for nighttime (6 PM to 5:59 AM)
    }
  }
    
  return (
<div>
    <table>
      <thead>
        <tr>
          <th>Timezone</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {timeData.map((data) => (
          <tr key={data.timezone}>
            <td>{data.timezone}</td>
            <td>{data.dateTime}</td>
            <td>{getDayOrNightEmoji(data.dateTime)}</td>
          </tr>
        ))}
      </tbody>
    </table>
{/* <button> Find the difference
</button> */}

</div>
  );
}

export default TimeComparisonTable;

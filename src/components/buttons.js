import React from 'react';

function TimeButtons() {
  const times = [];
  for (let hour = 7; hour <= 21; hour++) {
   
      times.push(`${hour}:00`);
  }

 
  const gridLayout = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '5px', 
  };

  return (
    <div className='time-buttons' style={gridLayout}>
      {/* Map over the array of time strings and render a button for each */}
      {times.map((time, index) => (
        <button key={index}>{time}</button>
      ))}
    </div>
  );
}

export default TimeButtons;

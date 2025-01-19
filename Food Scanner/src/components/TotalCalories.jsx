import React from 'react';
import './TotalCalories.css';

function TotalCalories({ calories }) {
  return (
    <div className="total-calories">
      <h2>Total Calories: {calories}</h2>
    </div>
  );
}

export default TotalCalories;


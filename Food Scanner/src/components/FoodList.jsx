import React from 'react';
import './FoodList.css';

function FoodList({ items }) {
  return (
    <div className="food-list">
      {items.map((dish) => (
        <div key={dish.id} className="food-item">
          <img src={dish.imgurl || "/placeholder.svg"} alt={dish.dishName} className="food-image" />
          <div className="food-info">
            <h3>{dish.dishName}</h3>
            <p>Total Calories: {dish.totalCalories}</p>
            <ul className="item-list">
              {dish.items.map((item, index) => (
                <li key={index}>
                  {item.name}: {item.calories} cal
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;



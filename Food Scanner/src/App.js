import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QRScanner from './components/QRScanner';
import FoodList from './components/FoodList';
import TotalCalories from './components/TotalCalories';
import './App.css';

function App() {
  const [scannedItems, setScannedItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (data) => {
    if (data) {
      try {
        const scannedData = JSON.parse(data);
        const newItem = {
          id: scannedData._id,
          dishName: scannedData.dishName,
          items: scannedData.items,
          imgurl: scannedData.imgurl,
          totalCalories: scannedData.items.reduce((total, item) => total + item.calories, 0)
        };
        setScannedItems([...scannedItems, newItem]);
        setIsScanning(false);
      } catch (error) {
        console.error('Error parsing QR code data:', error);
        alert('Invalid QR code format. Please try again.');
      }
    }
  };

  const handleScanClick = () => {
    setIsScanning(true);
  };

  const handleCloseScanner = () => {
    setIsScanning(false);
  };

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredItems = scannedItems.filter(item => {
    if (filter === 'all') return true;
    // Assuming 'type' is not provided in the new data structure, you may need to adjust this
    return item.type === filter;
  });

  const totalCalories = filteredItems.reduce((total, item) => total + item.totalCalories, 0);

  return (
    <div className="app">
      <Navbar onFilterChange={handleFilter} onScanClick={handleScanClick} />
      <div className="content">
        {isScanning ? (
          <QRScanner onScan={handleScan} onClose={handleCloseScanner} />
        ) : (
          <FoodList items={filteredItems} />
        )}
      </div>
      <TotalCalories calories={totalCalories} />
    </div>
  );
}

export default App;


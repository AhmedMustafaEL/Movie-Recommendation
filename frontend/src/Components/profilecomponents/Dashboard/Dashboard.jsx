
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../../Context/LoginContext/LoginContext';
import './Dashboard.css';

const Dashboard = () => {
  const { userName } = useContext(LoginContext); 
  const [watchList, setWatchList] = useState(() => {
    const savedList = localStorage.getItem('watchList');
    return savedList ? JSON.parse(savedList) : ['Item 1', 'Item 2'];
  });

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = () => {
    const newItem = prompt("Enter a new item for your watch list:");
    if (newItem) {
      setWatchList((prevList) => [...prevList, newItem]);
    }
  };

  const removeFromWatchList = (itemToRemove) => {
    setWatchList((prevList) => prevList.filter(item => item !== itemToRemove));
  };

  return (
    <div className="dashboard">
      <h1 className="welcome">Hello, {userName || 'Guest'}!</h1>
      <h2>Your Watch List</h2>
      <ul className="watch-list">
        {watchList.map((item, index) => (
          <li key={index} className="watch-list-item">
            {item}
            <button className="remove-button" onClick={() => removeFromWatchList(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="add-button" onClick={addToWatchList}>Add to Watch List</button>
    </div>
  );
};

export default Dashboard;

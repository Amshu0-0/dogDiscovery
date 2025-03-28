import React, { useState } from 'react';
import './App.css';
import DogCard from './components/DogCard';
import BanList from './components/BanList';
import DiscoverButton from './components/DiscoverButton';

function App() {
  const [dogData, setDogData] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const handleDiscover = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      
      // Extract breed from image URL
      const breed = data.message.split('/')[4];

      // Check if breed is banned
      if (!banList.includes(breed)) {
        const fullBreedResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const breedData = await fullBreedResponse.json();

        const dogInfo = {
          imageUrl: data.message,
          breed: breed,
          imageCount: breedData.message.length
        };

        setDogData(dogInfo);
        setHistory(prev => [...prev, dogInfo]);
      } else {
        // If breed is banned, try again
        handleDiscover();
      }
    } catch (error) {
      console.error('Error fetching dog data:', error);
    }
  };

  const toggleBanList = (item) => {
    setBanList(prev => 
      prev.includes(item) 
        ? prev.filter(banned => banned !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="container">
      <h1 className="app-title">Dog Discovery App</h1>
      
      <DiscoverButton onClick={handleDiscover} />
      
      {dogData && (
        <DogCard 
          dogData={dogData} 
          onBan={() => toggleBanList(dogData.breed)}
        />
      )}
      
      <BanList 
        banList={banList} 
        onRemove={toggleBanList} 
      />

      <div className="history-section">
        <h2 className="history-title">Discovery History</h2>
        <div className="history-images">
          {history.map((dog, index) => (
            <img 
              key={index} 
              src={dog.imageUrl} 
              alt={`Dog ${index + 1}`} 
              className="history-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
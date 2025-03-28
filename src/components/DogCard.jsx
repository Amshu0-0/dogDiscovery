import React from 'react';

function DogCard({ dogData, onBan }) {
  return (
    <div className="dog-card">
      <img 
        src={dogData.imageUrl} 
        alt={`${dogData.breed} dog`} 
        className="dog-image"
      />
      
      <div>
        <p 
          onClick={onBan}
          className="breed-name"
        >
          Breed: {dogData.breed}
        </p>
        <p>Total Images Available: {dogData.imageCount}</p>
      </div>
    </div>
  );
}

export default DogCard;
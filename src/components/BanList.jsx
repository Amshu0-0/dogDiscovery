import React from 'react';

function BanList({ banList, onRemove }) {
  return (
    <div className="ban-list">
      <h2 className="ban-list-title">Banned Breeds</h2>
      {banList.length === 0 ? (
        <p>No breeds banned yet</p>
      ) : (
        <div>
          {banList.map((breed) => (
            <span 
              key={breed}
              onClick={() => onRemove(breed)}
              className="banned-breed"
            >
              {breed} ✖
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default BanList;
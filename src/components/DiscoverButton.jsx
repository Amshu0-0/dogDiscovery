import React from 'react';

function DiscoverButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="discover-button"
    >
      Discover New Dog
    </button>
  );
}

export default DiscoverButton;
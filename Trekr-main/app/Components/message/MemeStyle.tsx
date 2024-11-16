// MemeStyle.tsx
import React from 'react';
import './MemeStyle.css'; // Importing the CSS file for styling

const MemeStyle: React.FC = () => {
    return (
        <div className="meme-container">
            <i className="fas fa-smile"></i>
            <div className="spacer"></div>
            <i className="fas fa-image"></i>
            <i className="fas fa-heart"></i>
        </div>
    );
};

export default MemeStyle;

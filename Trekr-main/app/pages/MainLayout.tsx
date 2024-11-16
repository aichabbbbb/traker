import React from 'react';
import './ProfilePage.css';
import PhotoGrid from './PhotoGrid';

const ProfilePage: React.FC = () => {
  const follow = () => {
    console.log('Follow clicked');
    // Add follow functionality here
  };

  const message = () => {
    console.log('Message clicked');
    // Add message functionality here
  };

  return (
    <div>
      <div className="header"></div>
      <div className="profile">
        <img
          src="https://storage.googleapis.com/a1aa/image/SmscvYylfOVfGUxefA74JXicZt2dXHd3LUBxUYzah09ckDwOB.jpg"
          alt="Profile picture of a person holding a bouquet of flowers"
        />
        <h2>Melissa Peters</h2>
        <p>Editorial Designer</p>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Lyon, France</span>
        </div>
        <div className="stats">
          <div>
            <h3>122</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>67</h3>
            <p>Following</p>
          </div>
          <div>
            <h3>37K</h3>
            <p>Likes</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={follow}>Follow</button>
          <button onClick={message}>Message</button>
        </div>
      </div>

      {/* Add PhotoGrid here */}
      <PhotoGrid />
    </div>
  );
};

export default ProfilePage;

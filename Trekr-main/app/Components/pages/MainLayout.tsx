import React, { useState } from 'react';
import './ProfilePage.css';
import PhotoGrid from './PhotoGrid';
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: 'Melissa',
    lastName: 'Peters',
    birthday: '',
    country: 'France',
    phone: '',
  });

    const [profileImage, setProfileImage] = useState<string | null>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const updateProfile = async () => {
    try {
      const response = await axios.put('http://213.130.144.203:8084/api/user/update-profile', profile, {
        headers: { Authorization: 'Bearer your-auth-token' },
      });
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  const updateProfileImage = async () => {
    if (!profileImage) return;

    const formData = new FormData();
    formData.append('image', profileImage);

    try {
      const response = await axios.put('http://213.130.144.203:8084/api/user/profile/image', formData, {
        headers: {
          Authorization: 'Bearer your-auth-token',
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile image updated:', response.data);
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  };
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
          src={profileImage || "https://storage.googleapis.com/a1aa/image/SmscvYylfOVfGUxefA74JXicZt2dXHd3LUBxUYzah09ckDwOB.jpg"}
          alt="Profile picture"
        />
                <h2>{profile.firstName} {profile.lastName}</h2>

        <p>Editorial Designer</p>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Lyon, {profile.country}</span>
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

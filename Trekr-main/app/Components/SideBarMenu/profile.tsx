// pages/profile.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Profile.module.css'; // Assuming you have a CSS file for styling

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <h1>Profile Page</h1>
      <div className={styles.profileContent}>
        <Image src="/Assets/wahab.xyz.jfif" alt="Profile Picture" width={150} height={150} className={styles.profileImage} />
        <h2>Your Name</h2>
        <p>Welcome to your profile page!</p>
        {/* Add additional profile information here */}
      </div>
    </div>
  );
};

export default Profile;

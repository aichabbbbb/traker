import React, { useState } from 'react';
import styles from './Popup.module.css'; // Your CSS module

interface Notification {
  username: string;
  message: string;
  timeAgo: string;
  profilePicture: string | null;
  isFollowable: boolean;
}

interface Section {
  title: string;
  notifications: Notification[];
}

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [showNotifications, setShowNotifications] = useState(true);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const notifications: Section[] = [
    {
      title: 'Hier',
      notifications: [
        {
          username: 'sama_rra',
          message: 'a commencé à te suivre.',
          timeAgo: '1j',
          profilePicture: 'https://storage.googleapis.com/a1aa/image/nxpkDVF1k44qFF5EeS3jrJBu1uzhjBVDfmeDuJXeRlfmy0NdC.jpg',
          isFollowable: true,
        },
      ],
    },
    {
      title: 'Cette semaine',
      notifications: [
        {
          username: 'imkirtzxzza',
          message: "et d'autres que vous connaissez pour voir leurs photos et vidéos.",
          timeAgo: '1j',
          profilePicture: null,
          isFollowable: false,
        },
      ],
    },
  ];

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popupContent}>
        {showNotifications && (
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>Notifications</h2>
              <i class="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-down" onClick={toggleNotifications} />
            </div>

            {/* Hier Section */}
            <div className={styles.section}>
              <h3>Hier</h3>
              {notifications[0].notifications.map((notification, nIndex) => (
                <div className={styles.notification} key={nIndex}>
                  {notification.profilePicture ? (
                    <img
                      src={notification.profilePicture}
                      alt="Profile picture"
                      className={styles.profilePicture}
                    />
                  ) : (
                    <div className={styles.profilePlaceholder} />
                  )}
                  <div className={styles.text}>
                    <p>
                      <strong>{notification.username}</strong> {notification.message}
                      <span className={styles.timeAgo}>{notification.timeAgo}</span>
                    </p>
                  </div>
                  {notification.isFollowable && (
                    <button className={styles.followBtn}>Suivre</button>
                  )}
                </div>
              ))}
            </div>

            {/* Cette semaine Section */}
            <div className={`${styles.section} ${styles.cetteSemaine}`}>
              <h3>Cette semaine 1</h3>
              {notifications[1].notifications.map((notification, nIndex) => (
                <div className={styles.notification} key={nIndex}>
                  {notification.profilePicture ? (
                    <img
                      src={notification.profilePicture}
                      alt="Profile picture"
                      className={styles.profilePicture}
                    />
                  ) : (
                    <div className={styles.profilePlaceholder} />
                  )}
                  <div className={styles.text}>
                    <p>
                      <strong>{notification.username}</strong> {notification.message}
                      <span className={styles.timeAgo}>{notification.timeAgo}</span>
                    </p>
                  </div>
                  {notification.isFollowable && (
                    <button className={styles.followBtn}>Suivre</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;

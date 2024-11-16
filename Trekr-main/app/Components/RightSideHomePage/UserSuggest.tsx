"use client";
import styles from "./RightSideHomePage.module.css";

interface UserSuggestProps {
  image_profile_user: string;
  username: string;
  description: string;
}

const UserSuggest: React.FC<UserSuggestProps> = ({
  image_profile_user,
  username,
  description,
}) => {
  const handleFollow = () => {
    console.log(`Following ${username}`);
  };

  return (
    <div className={styles.user_suggest}>
      <div className={styles.user_info}>
        <div className={styles.image_profile_user}>
          <img src={image_profile_user} alt={username} />
        </div>
        <div className={styles.user_details}>
          <h6>{username}</h6>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.suivre}>
        <span onClick={handleFollow}>suivre</span>
      </div>
    </div>
  );
};

export default UserSuggest;

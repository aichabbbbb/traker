import styles from "./MiddleHomePage.module.css"
import Head from "next/head";
type UserSuggestionProps = {
  name: string;
  avatarUrl: string;
  description : string;
};

const UserSuggestion: React.FC<UserSuggestionProps> = ({ 
  name, 
  avatarUrl, 
  description
}) => {
  return (
    <>
    <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
    <div className={styles.user_suggestion}>
      <div className={styles.user_image_avatar}>
        <img 
          src={avatarUrl} 
          alt={`${name}'s avatar`} 
        />
      </div>
        <div className={styles.user_info}>
          <div className={styles.user_description}>
            <p>{name}</p>
            <span>{description}</span>
          </div>
          <button className={styles.follow_button}>
            Follow
          </button>
      </div>
    </div>
    </>
  );
};

export default UserSuggestion;

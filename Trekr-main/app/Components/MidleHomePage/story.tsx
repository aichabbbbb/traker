"use client"
import styles from "./MiddleHomePage.module.css"
import { useState } from "react";

export interface StoryProps {
  img_profile: string;
  name_utilisateur: string;
  visited: boolean;
}

const Story: React.FC<StoryProps> = ({ 
  img_profile, 
  name_utilisateur, 
  visited: initialVisited 
}) => {
  const [visited, setVisited] = useState(initialVisited);

  const handleClick = () => {
    setVisited(true);
  }

  return (
    <div 
      className={`${styles.story} ${visited ? styles.visited : styles.notVisited}`} 
      onClick={handleClick}
    >
      <div className={styles.image_profile_container}>
        <img src={img_profile} alt={name_utilisateur} className={styles.imgProfile} />
      </div>
      <p className={styles.nameUtilisateur}>{name_utilisateur}</p>
    </div>
  );
}
 
export default Story;
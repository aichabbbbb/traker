"use client"
import styles from "./RightSideHomePage.module.css"
const BottomDescription = () => {
  return ( 
    <div className={styles.bottom_container}>
      <div className={styles.description}>
        <h4>Vous êtes <span>Unique</span></h4>
        <p>Unique. Inclusif. Personnalisé.</p>
      </div>
      <div className={styles.image_description}>
        <img 
          src="/Assets/discover_hotels.png" 
          alt="discover Hotels" 
        />
      </div>
      <div className={styles.area_button}>
        <button>Explorez Maintenant</button>
      </div>
    </div>
   );
}
 
export default BottomDescription;
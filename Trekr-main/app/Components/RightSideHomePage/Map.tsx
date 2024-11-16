"use client"
import styles from "./RightSideHomePage.module.css"
const Map = () => {
  return ( 
    <div className={styles.map_container}>
      <div className={styles.first_image}>
        <img 
          src="/Assets/fake_image.png" 
          alt="" 
        />
      </div>
      <div className={styles.map_image}>
        <img 
          src="/Assets/MAP.png" 
          alt="Map image trekr" 
        />
      </div>
    </div>
   );
}
 
export default Map;
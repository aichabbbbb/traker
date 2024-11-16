"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BottomSide.module.css"

const BottomSide: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("/Assets/image_phones.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/Assets/phones_tab_media.png"); 
      } else {
        setImageSrc("/Assets/image_phones.png"); 
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return ( 
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.logo_description}>
          <div className={styles.image_container}>
            <Image
              className={styles.trekr_image} 
              src="/Assets/Treker-image.png"
              alt="Trekr"
              width={432}
              height={380}
            />
          </div>
          <div className={styles.description}>
            <p>Explorer le Monde avec <span>Trekr</span>: <br />
            Votre Compagnon de Voyage Social</p>
          </div>
        </div>
        <div className={styles.application_store}>
          <p>Téléchargez l&apos;application</p>
          <div className={styles.images_store}>
            <Image 
              src="/Assets/google_play.png"
              alt="google play"
              width={135}
              height={40}
            />
            <Image 
              src="/Assets/app_store.png"
              alt="app store"
              width={135}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className={styles.phones_side}>
        <Image 
          className={styles.phones_images}
          src={imageSrc}
          alt="iphone"
          width={1200}
          height={700}
        />
      </div>
    </div>
  );
}

export default BottomSide;

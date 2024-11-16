// SideBarMenu.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SideBarMenu.module.css";
import { IconType } from "react-icons";
import Link from "next/link";
import { FaHome, FaCompass, FaEnvelope, FaBell, FaPlus, FaUsers, FaMap, FaUser } from "react-icons/fa";
import NotificationComponent from './Popup';

type LinkItem = {
  title: string;
  icon: IconType;
  href?: string;
  img?: string;
  onClick?: () => void;
};

type SideBarMenuProps = {
  isNotificationVisible: boolean;
  onNotificationToggle: () => void;
};

const links: LinkItem[] = [
  { title: "Accueil", icon: FaHome, href: "/acceuil" },
  { title: "Explorer", icon: FaCompass, href: "/explorer" },
  { title: "Message", icon: FaEnvelope, href: "/message" },
  { title: "Notifications", icon: FaBell, href: "/notifications" },
  { title: "Créer", icon: FaPlus },
  { title: "Communauté", icon: FaUsers, href: "/communaute" },
  { title: "Carte", icon: FaMap, href: "/carte" },
  { title: "Profile", icon: FaUser, img: "/Assets/wahab.xyz.jfif", href: "/profile" },
];

const SideBarMenu: React.FC<SideBarMenuProps> = ({ isNotificationVisible, onNotificationToggle }) => {
  const [imageSrc, setImageSrc] = useState<string>("/Assets/Treker-image.png");
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/Assets/e-image.png");
        setShowText(false);
      } else {
        setImageSrc("/Assets/Treker-image.png");
        setShowText(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <Image
            className={styles.trekr_image}
            src={imageSrc}
            alt="Trekr"
            width={166}
            height={172}
          />
        </div>
        <div className={styles.nav_link}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.href ? (
                  link.title === "Notifications" ? (
                    <button
                      onClick={onNotificationToggle}
                      className={styles.buttonLink}
                      aria-label="Show notifications"
                    >
                      <link.icon />
                      {showText && link.title}
                    </button>
                  ) : (
                    <Link href={link.href}>
                      {link.img ? (
                        <div className={styles.image_container}>
                          <img src={link.img} alt={`${link.title} icon`} />
                        </div>
                      ) : (
                        <link.icon />
                      )}
                      {showText && link.title}
                    </Link>
                  )
                ) : (
                  <button onClick={link.onClick} className={styles.buttonLink}>
                    <link.icon />
                    {showText && link.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNotificationVisible && <NotificationComponent onClose={onNotificationToggle} />}
    </nav>
  );
};

export default SideBarMenu;

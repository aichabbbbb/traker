"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideBarMenu from "./Components/SideBarMenu/SideBarMenu";
import MiddleHomePage from "./Components/MidleHomePage/MiddleHomePage";
import RightSideHomePage from "./Components/RightSideHomePage/RightSideHomePage";
import styles from "./page.module.css";
import Head from "next/head";
import LoadingDots from "./Components/LoadingDots/LoadingDots";
import './index.css'; // Import Tailwind CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  // Toggle function for notifications
  const handleNotificationToggle = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <LoadingDots />;
  }

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <main>
        <div className={styles.row}>
          <div className={styles.nav}>
            <SideBarMenu
              isNotificationVisible={isNotificationVisible}
              onNotificationToggle={handleNotificationToggle}
            />
          </div>
          <div className={styles.home}>
            <MiddleHomePage />
            <RightSideHomePage />
          </div>
        </div>
      </main>
    </>
  );
}

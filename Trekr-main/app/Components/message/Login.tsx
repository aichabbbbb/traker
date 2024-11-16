"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BottomSide from "../BottomSideLoginLogout/BottomSide";
import { useRouter } from "next/navigation";
import Axios from "axios";
import { useState } from "react";
import baseURL from "../../utils/baseUrl";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import MainLayout from "./MessgeFile";
import Head from "next/head";
import NotificationComponent from "../SideBarMenu/Popup"; // Ensure NotificationComponent is correctly imported

const Login1 = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleNotificationToggle = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleCloseNotification = () => {
    setIsNotificationVisible(false);
  };

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <main>
        <div className={styles.row}>
          <div className={styles.nav} >

            <SideBarMenu
              isNotificationVisible={isNotificationVisible}
              onNotificationToggle={handleNotificationToggle}
            />
          </div>
          <div className={styles.container} style={{ height: "-webkit-fill-available" }}>
            <MainLayout />
          </div>
        </div>
        {isNotificationVisible && (
          <NotificationComponent onClose={handleCloseNotification} />
        )}
      </main>
    </>
  );
};

export default Login1;

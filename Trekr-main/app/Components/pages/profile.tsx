
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SideBarMenu from "../app/Components/SideBarMenu/SideBarMenu";
import styles from "./page.module.css";
import Head from "next/head";

import ReactDOM from 'react-dom/client';
export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);


  return (
    <>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <main>
        <div className={styles.row}>
          <div className={styles.nav}>
            <SideBarMenu />
          </div>
          <div className={styles.home}>

          </div>
        </div>
      </main>
    </>
  );
}

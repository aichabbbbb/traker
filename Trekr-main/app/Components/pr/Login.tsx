"use client"
import Image from "next/image";
import styles from "./Login.module.css"
import BottomSide from "../BottomSideLoginLogout/BottomSide";
import { useRouter } from "next/navigation";
import Axios from 'axios';
import { useState } from "react";
import baseURL from "../../utils/baseUrl"
import React from "react";

const Profail: React.FC = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is your profile page.</p>
    </div>
  );
};

export default Profail;
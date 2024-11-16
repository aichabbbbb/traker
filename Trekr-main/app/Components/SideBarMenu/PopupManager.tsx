"use client";

import { useState, useEffect } from 'react';
import CreatePopup from './CreatePopup';

const PopupManager: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      console.log("Popup event triggered"); // Debug log
      setIsPopupOpen(true);
    };

    document.addEventListener("openPopup", handleOpenPopup);

    return () => {
      document.removeEventListener("openPopup", handleOpenPopup);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  return (
    <CreatePopup isOpen={isPopupOpen} onClose={() => {
      console.log("Popup closed"); // Debug log
      setIsPopupOpen(false);
    }} />
  );
};

export default PopupManager;

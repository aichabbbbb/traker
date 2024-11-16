import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery: React.FC = () => {
  const [images] = useState([
    {
      alt: "Scenic view of a tree and clear blue sky",
      src: "https://storage.googleapis.com/a1aa/image/Kksbs4oPUo6LOd6PLizzfv84PnsisZ8qYtJwHRblntqZQO1JA.jpg"
    },
    {
      alt: "Airplane flying in the sky",
      src: "https://storage.googleapis.com/a1aa/image/aF5pSH0vxeX3JyRaQrM6Xv8qAbo9EvM8jxgAMUef1n6kB5UnA.jpg"
    },
    {
      alt: "Person standing near the sea with birds flying",
      src: "https://storage.googleapis.com/a1aa/image/D3qkEtmRsfRAM6AJE7y1RhNtvw92PZBxaxkQephp1xbtgcqTA.jpg"
    },
    {
      alt: "Person sitting on a ledge with a city background",
      src: "https://storage.googleapis.com/a1aa/image/ULBUdWdqdaYbGlF92fsNVJcq5ZrFfsG37Pv9mnpeuIM0B5UnA.jpg"
    },
    {
      alt: "Orange suitcase on a beach",
      src: "https://storage.googleapis.com/a1aa/image/WoKfHsNCFaQMNSKBgrh687C8S9qCqSiorriBOSFHbK4bQO1JA.jpg"
    },
    {
      alt: "Group of friends on a boat",
      src: "https://storage.googleapis.com/a1aa/image/XkmyShrQQOqgDlZwG8xKIWnD2ttKToarUdrK0mhBc8MMIn6E.jpg"
    },
    {
      alt: "Person walking in a city with a cathedral in the background",
      src: "https://storage.googleapis.com/a1aa/image/regpvk8uytwjMK3LcqNWs5hn1cwPDJK7wAVCnTCVvsPaQO1JA.jpg"
    },
    {
      alt: "Busy street in a city with bright lights and advertisements",
      src: "https://storage.googleapis.com/a1aa/image/Xm1xTJK9rtpaMRQef49f6lLbaMwIefNVwq5hpzg7FhN7FkTdC.jpg"
    },
    {
      alt: "Scenic view of a lake and mountains",
      src: "https://storage.googleapis.com/a1aa/image/RzIb41e4oGUwHqzGK425L5PljeEsHaciWTYpBfTfM7tkDypOB.jpg"
    },
    {
      alt: "Person taking a photo in a historic city",
      src: "https://storage.googleapis.com/a1aa/image/82wMgkrlXbb8OJuZKv8TaavDk0FEezSIm71UjxBoeeKtB5UnA.jpg"
    },
  ]);

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} alt={image.alt} src={image.src} />
      ))}
      <div className="center-text">
        COMMENT DEPARTIR
        <br />
        Voyager
      </div>
    </div>
  );
};

export default ImageGallery;

"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/home/Hero.module.css";
import Image from "next/image";

const images = [
  "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/o/p/6/-original-imahc6hz2ykaquzc.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/n/v/-original-imahavdveeghweea.jpeg?q=70&crop=false",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70&crop=false",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prevValues) => prevValues + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <Image
            key={"slider" + index}
            alt={`slider ${index + 1}`}
            className={`${styles.slide} ${
              currentSlide === index ? styles.active : ""
            }`}
            src={image}
            width={400} // or adjust as needed
            height={400}
            objectFit="contain"
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

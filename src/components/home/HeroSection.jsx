"use client"

import styles from "@/styles/home/Hero.module.css";
import React from 'react';
import Slider from './Slider';
import Container from '../Container';

const HeroSection = () => {
  return (
    <Container>
      <section className={styles.hero}>
        {/* Text section  */}
        <div className={styles.textSection}>
          <h1>
            One stop solution <span className="text-pink-500">E-store</span>
          </h1>
          <p>
            Discover the latest headphones, earphones, mobiles, tablets and more with unbeatable prices.
          </p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>

        {/* Image slider section */}
        <Slider />
      </section>
    </Container>
  );
};

export default HeroSection;

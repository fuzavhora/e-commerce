"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "@/styles/home/FeaturedProduct.module.css";

const ProductBox = ({product}) => {


  const filledStars = Math.floor(product.rating.rate);
  const emptyStars = 5 - filledStars;

  return (
    <div key={product.id} className={`${styles.productBox} max-w-2xs bg-white rounded-2xl p-4 flex flex-col justify-between relative`}>
      {/* Overlay for hover */}
      <div className={styles.overlay}></div>

      {/* Product Image */}
      <div className="relative w-full h-54 z-10">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`${styles.img} object-contain`}
        />
      </div>

      {/* Product Info */}
      <div className="pt-4 flex flex-col gap-2 z-10">
        <span className="text-xs font-medium text-gray-500 uppercase bg-gray-100 px-2 py-1 rounded-full w-fit">
          {product.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>

          <div className={`${styles.rating} flex items-center gap-1 text-yellow-500`}>
            {[...Array(filledStars)].map((_, i) => (
              <FaStar key={i} size={16} />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={i} size={16} />
            ))}
            <span className="text-sm text-gray-600 ml-1">({product.rating.count})</span>
          </div>
        </div>
      </div>

      {/* Buy Now Button */}
      <button className={`${styles.buyNowButton} absolute bottom-4 left-4 right-4 bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-700 transition`}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductBox;

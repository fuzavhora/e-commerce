import Link from "next/link";
import React from "react";

const StoreProductCard = ({ product }) => {
  const { id, title, category, price, description, images, slug } = product;

  return (
    <Link
      href={`store/product-details/${id}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 group max-w-sm"
    >
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Thumbnails */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.slice(1,).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className="w-8 h-8 object-cover rounded border border-white shadow"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs font-medium text-gray-500 mb-1">
          Category: <span className="text-indigo-600">{category.name}</span>
        </div>
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-300">
          {title}
        </h3>
        {/* Price */}
        <p className="text-sm text-gray-700 mt-1 mb-2">₹{price}</p>
        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        {/* Button */}
        <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition">
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default StoreProductCard;

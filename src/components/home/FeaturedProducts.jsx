"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const sorted = [...data].sort((a, b) => {
        const aScore = a.rating.rate * a.rating.count;
        const bScore = b.rating.rate * b.rating.count;
        return bScore - aScore;
      });

      setProducts(sorted.slice(0, 4));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="bg-gray-300 py-16">
      <Container>
        <h1 className="text-center font-bold text-3xl mb-5">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((prod) => (
            <ProductBox key={prod.id} product={prod} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;

"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

const RecentlyAdded = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data.reverse().slice(0, 4)); // optional: reverse to simulate "recent"
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className=" py-16">
      <Container>
        <h1 className="text-center text-3xl font-bold mb-5">Recently Added Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((prod) => (
            <ProductBox key={prod.id} product={prod} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentlyAdded;

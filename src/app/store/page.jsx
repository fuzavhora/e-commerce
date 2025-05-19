import { getProducts } from "@/components/library";
import StoreProductCard from "@/components/StorePrdoductBox"; // fixed typo

import React from "react";

const StorePage = () => {
  // async because server component

  return <ProductListing />;
};

export default StorePage;

const ProductListing = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <StoreProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


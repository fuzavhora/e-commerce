import Container from "@/components/Container";
import CategoryListing from "@/components/store/CategoryListing";
import React from "react";

const Layout = async ({ children }) => {
  return (
    <Container className="grid grid-cols-6 gap-6 w-full px-6 py-4">
      {/* Sidebar: Category Listing */}
      <div className="col-span-1">
        <CategoryListing />
      </div>

      {/* Main Content */}
      <div className="col-span-5">{children}</div>
    </Container>
  );
};

export default Layout;

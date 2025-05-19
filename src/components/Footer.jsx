import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-pink-500 py-10 text-white">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We offer the best fashion and lifestyle products at unbeatable prices. Trusted by thousands of customers worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shipping" className="hover:underline">Shipping</a></li>
            <li><a href="/returns" className="hover:underline">Returns</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">📘</a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">🐦</a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">📸</a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">📺</a>
          </div>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="px-3 py-2 rounded text-black"
            />
            <button className="bg-white text-pink-500 px-3 py-2 rounded font-semibold hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
      <div className="text-center mt-10 text-sm text-white opacity-80">
        &copy; {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

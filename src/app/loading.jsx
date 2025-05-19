'use client';

import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Spinning Cart Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="text-blue-600"
        >
          <FiShoppingCart className="w-16 h-16" />
        </motion.div>

        {/* Pulsing e-store Logo */}
        <motion.h1
          className="text-3xl font-extrabold text-blue-700 tracking-wider"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          e-store
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-500 text-sm tracking-widest uppercase"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Loading your fashion...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const NotFoundPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
  >
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-6">
      Oops! The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dull transition"
    >
      Go Home
    </Link>
  </motion.div>
);

export default NotFoundPage;

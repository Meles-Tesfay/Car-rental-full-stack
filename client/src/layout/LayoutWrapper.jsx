import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PublicRoutes from "../routes/PublicRoutes";
import OwnerRoutes from "../routes/OwnerRoutes";
import ScrollToTop from "../components/ScrollToTop";

const LayoutWrapper = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <>
      <ScrollToTop />
      {/* Navbar displayed only on public pages */}
      {!isOwnerPath && <Navbar />}
      {/* Render appropriate route tree */}
      {isOwnerPath ? <OwnerRoutes /> : <PublicRoutes />}
      {/* Footer displayed only on public pages */}
      {!isOwnerPath && <Footer />}
    </>
  );
};

export default LayoutWrapper;

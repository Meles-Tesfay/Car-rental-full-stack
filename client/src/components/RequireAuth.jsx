import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

/**
 * RequireAuth - protects routes that require a logged‑in user.
 * If there is no authenticated user, redirects to the home page ("/").
 */
const RequireAuth = ({ children }) => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Not logged in – send them to the public home page.
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  // While redirecting, render nothing.
  if (!user) return null;

  return <>{children}</>;
};

export default RequireAuth;

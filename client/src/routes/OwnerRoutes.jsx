import React, { Suspense, lazy } from "react";
import RequireAuth from "../components/RequireAuth";

// Lazy loaded owner pages
const Dashboard = lazy(() => import("../pages/Owner/Dashboard"));
const AddCar = lazy(() => import("../pages/Owner/AddCar"));
const ManageCars = lazy(() => import("../pages/Owner/ManageCars"));
const ManageBookings = lazy(() => import("../pages/Owner/ManageBookings"));

const OwnerRoutes = () => (
  <RequireAuth>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/owner" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </RequireAuth>
);

export default OwnerRoutes;

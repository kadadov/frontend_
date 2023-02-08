import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "widgets/Navbar";
import { Loader } from "shared/ui/Loader";
import { SwitcherTheme } from "widgets/SwitcherTheme";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <SwitcherTheme />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

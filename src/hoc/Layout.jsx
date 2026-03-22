import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      {/* 🔥 THIS IS REQUIRED */}
      <div className="flex-grow p-6">
        <Outlet />
      </div>

      <Footer />

    </div>
  );
}

export default Layout;
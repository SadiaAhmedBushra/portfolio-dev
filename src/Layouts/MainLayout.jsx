import { Outlet } from "react-router";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main content grows to fill space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer sticks to bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;

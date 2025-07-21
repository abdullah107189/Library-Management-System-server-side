import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mxw sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="mxw grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

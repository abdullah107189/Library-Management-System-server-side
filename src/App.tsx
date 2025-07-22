import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;

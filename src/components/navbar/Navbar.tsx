import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "../ui/button";
const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const li = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <Button variant={isActive ? "default" : "outline"}>Home</Button>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/allBooks">
          {({ isActive }) => (
            <Button variant={isActive ? "default" : "outline"}>
              All Books
            </Button>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/addBook">
          {({ isActive }) => (
            <Button variant={isActive ? "default" : "outline"}>Add Book</Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/borrowSummary">
          {({ isActive }) => (
            <Button variant={isActive ? "default" : "outline"}>
              Borrow Summary
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="md:mt-3 z-50  flex items-center justify-between w-full relative rounded-full md:px-[10px] md:py-[6px] p-2 bg-card">
      {/* logo */}
      <img
        src="https://i.ibb.co/0BZfPq6/darklogo.png"
        alt="logo"
        className="w-[55px] "
      />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {li}
      </ul>

      {/* action buttons */}
      <div className="items-center gap-[10px] flex">
        <ModeToggle></ModeToggle>

        <CiMenuFries
          className="text-[1.8rem]  mr-1 text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-10"
            : "-translate-y-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <ul className="items-center w-full gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          {li}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;

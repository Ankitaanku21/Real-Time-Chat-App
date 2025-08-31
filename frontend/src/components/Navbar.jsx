import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="bg-black-100 border-black text-white border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left Side Logo */}
          <div className="flex items-center gap-2.5">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="size-6" />
          </button>

          {/* Right Side Menu */}
          <div
            className={`flex-col sm:flex-row sm:flex items-center gap-4 sm:gap-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-base-100 sm:bg-transparent shadow-md sm:shadow-none p-4 sm:p-0 transition-all duration-300 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <Link
              to={"/settings"}
              className="btn flex btn-sm gap-2 transition-colors bg-gray-700/60 w-full sm:w-auto rounded-lg p-2"
            >
              <Settings className="size-6" />
              <span className="sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="btn flex btn-sm gap-2 relative bg-gray-700/60 w-full sm:w-auto rounded-lg p-2 shadow-sm"
                >
                  <User className="size-6" />
                  <span className="sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center relative bg-gray-700/60 w-full sm:w-auto rounded-lg p-2"
                  onClick={logout}
                >
                  <LogOut className="size-6" />
                  <span className="sm:inline ">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

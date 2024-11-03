import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css"; // Create and import your own CSS file for styling
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { LoginContext } from "../../Context/LoginContext/LoginContext"; // Assuming you have a login context

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { userName, setUserName } = useContext(LoginContext);
  const navigate = useNavigate();

  
  const isLoggedIn = localStorage.getItem("currentUser");

  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Remove user from localStorage
    setUserName(null); // Clear the context userName
    navigate("/Login"); // Navigate to login page
  };

  return (
    <div>
      <nav className="navbar">
        <div className={scrolling ? 'navbar-scroll' : 'navbar-container'}>
       
          <div className="navbar-logo">
            <Link to="/">Movies</Link>
          </div>

        
          <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/Series">Series</Link>
            <Link to="/Anime">Anime</Link>


            <div className="nav-search">
              <div className="searchbar">
                <label htmlFor="searchglass">
                  <FontAwesomeIcon className="iconglass" icon={faMagnifyingGlass} />
                </label>
                <input id="searchglass" className="searchinputnav" type="text" placeholder="Enter Keywords...." />
              </div>
            </div>

          
            <div className="nav-login">
              <div className="loguser">
                {isLoggedIn ? (
                  <>
                    <span>Hello, {isLoggedIn}!</span>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <Link to="/Login">
                    <FontAwesomeIcon className="ulogc" icon={faUser} /> Login
                  </Link>
                )}
              </div>
            </div>
          </div>

         
          <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
            <div className="menu-icon-bar"></div>
            <div className="menu-icon-bar"></div>
            <div className="menu-icon-bar"></div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;

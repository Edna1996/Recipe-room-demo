import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import './Group'

const Navbar = ({isAuthenticated, setIsAuthenticated}) => {
  
  const navigate = useNavigate()

  function handleLogout() {
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // setUser(null);
        setIsAuthenticated(false);
        navigate("/login")
      }
    });
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-1 has-text-white">Recipe Room</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" exact className="navbar-item">
            Home
          </Link>
          {/* <Link to="/articles" exact className="navbar-item">
            Articles
          </Link> */}
           <Link to="/groups" exact className="navbar-item">
                Groups
              </Link>
              <Link to="/recipes" exact className="navbar-item">
                Recipes
              </Link>
              <Link onClick={handleLogout} to="/logout" exact className="navbar-item">
                Logout
              </Link>
          {isAuthenticated ? (
            <>
             
            </>
          ) : (
            <>
              { <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/signup" className="navbar-item">
                Signup
              </Link>
              {<Link to='/reset_password' className="navbar-item">Reset password</Link>} }
            </>
          )}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;

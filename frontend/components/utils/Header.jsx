import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./styles/Header.css"
function Header() {
  
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return(
    <header className="NavHeader">
    <Link to="/" className="Logo">
      <h3>Shoppy</h3>
    </Link>
    <nav ref={navRef}>
      <div className="navlinks">

        <span className="navlinks-left">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">About</Link>
        </span>
        <span className="navlinks-right">
          <Link to="/user/login"><button type="button" className="btn btn-secondary">Login</button></Link>
          <Link to="/user/signin"><button className="btn btn-outline-secondary">SignUp</button></Link>
        </span>
      </div>
      <button className="nav-btn nav-close-btn">
        <FaTimes onClick={showNavBar} className="custom-icon" />
      </button>
    </nav>
    <button className="nav-btn nav-bar-btn">
      <FaBars onClick={showNavBar} className="custom-icon" />
    </button>
  </header>
  )
}

export default Header;
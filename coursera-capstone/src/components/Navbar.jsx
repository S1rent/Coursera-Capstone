import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faClose } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Little Lemon" />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
          <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
        </div>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul>
            <li
              className="burger"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                textAlign: "right",
                paddingRight: "16px",
                paddingBottom: "16px",
              }}
            >
              <FontAwesomeIcon
                icon={faClose}
                style={{ alignSelf: "flex-end" }}
              />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

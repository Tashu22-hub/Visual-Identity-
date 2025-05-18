
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im"
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar anims" style={{ height: menuOpen ? '250px' : '13px' }}>
            <div>
                <Link id="Port" to="/">
                    Portfolio
                </Link>
            </div>
            <ul id={menuOpen ? "Open" : ""} className="navbar-items">
            <li className="portfoliohide">
                    <NavLink className="navbar-item" id="Portfolio" to="/">
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink id="AboutMe" className="navbar-item" to="/about">
                        About Me
                    </NavLink>
                </li>
                
                <li>
                    <NavLink id="Skills" className="navbar-item" to="/skills">
                        Skills
                    </NavLink>
                </li>
               
                <li>
                    <NavLink id="Contacts" to="/contact">
                        Contact Me
                    </NavLink>
                </li>
            </ul>
            <div className="Menu">
                {menuOpen ? (
                    <span>
                        <ImCross
                            className="Cross"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </span>
                ) : (
                    <span>
                        <IoReorderThree
                            className="Threelines"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </span>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
import React from "react";
import { Nav, NavLink, NavMenu, Images }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Images>
                    <img src={require("./img/unt-logo.png")} alt="logo" width={198.8} height={85} />
                </Images>
                <text style={{ fontSize: 35, color: "white", }}>
                    Pro Movie Company
                </text>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/account" activeStyle>
                        Account
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
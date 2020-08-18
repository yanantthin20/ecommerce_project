import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/logo.svg";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ShoppingCart, Home, AccountCircle } from "@material-ui/icons";
import styled from "styled-components";
import DropDownMenu from "./Fragment/DropDownMenu";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
          Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk  */}
        {/* <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link> */}
        <DropDownMenu />
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <Home />
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ListItem button>
            <ShoppingCart />
            <ListItemText primary="Cart" />
          </ListItem>
        </Link>
        <Link to="/login">
          <AccountCircle />
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

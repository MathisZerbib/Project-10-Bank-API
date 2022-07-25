import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArgentBankLogo from "../../assets/images/argent-bank-logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: white;
`;

const HomeLogo = styled.img`
  max-height: 20%;
  max-width: 40%;
  float: left;
`;

const LinkContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
`;


function NavBar() {
  const isLinkActive = (isActive) =>
    "nav-link" + (!isActive ? " unselected" : "");
    const pathName = window.location.pathname

  return (
    <NavContainer className="nav-container">
      <NavLink to={pathName+"/"}>
        <HomeLogo src={ArgentBankLogo} />
      </NavLink>


      <LinkContainer>
        <NavLink className={isLinkActive} to={pathName+"/login"}>
          <FontAwesomeIcon icon={faUser} />
          Sign-In
        </NavLink>
      </LinkContainer>


    </NavContainer>
  );
}

export default NavBar;

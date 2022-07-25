import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArgentBankLogo from "../../assets/images/argent-bank-logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const NavContainer = styled.div`
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
`;


function NavBar() {
  const isLinkActive = (isActive) =>
    "nav-link" + (!isActive ? " unselected" : "");

  return (

<div>
<NavContainer className="main-nav">
      <NavLink to={"/"}>
        <HomeLogo src={ArgentBankLogo} />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      
    <div>
      <LinkContainer className="main-nav-item">
        <NavLink className={isLinkActive} to={"/sign-in"}>
          <FontAwesomeIcon icon={faUserCircle} />
          Sign-In
        </NavLink>
      </LinkContainer>
    </div>
  </NavContainer>
    </div>
  );
}

export default NavBar;

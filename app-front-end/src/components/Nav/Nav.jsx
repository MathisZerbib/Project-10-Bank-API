import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ArgentBankLogo from "../../assets/images/argent-bank-logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import { authActions } from "../../_store";

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

// const LinkContainer = styled.nav`
//   display: flex;
//   justify-content: space-evenly;
// `;

export { Nav };

function Nav() {
  const authUser = useSelector((x) => x.auth.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());

  // only show nav when logged in
  if (!authUser)
    return (
      <div>
        <NavContainer className="main-nav">
          <div className="navbar-nav">
            <NavLink to={"/"}>
              <HomeLogo src={ArgentBankLogo} />
              <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
          </div>
        </NavContainer>

        <NavContainer>
          <NavLink to={"/login"}>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign-In
          </NavLink>
        </NavContainer>
      </div>
    );

  return (
    <div>
      <NavContainer className="main-nav">
        <div className="navbar-nav">
          <NavLink to={"/"}>
            <HomeLogo src={ArgentBankLogo} />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
        </div>
      </NavContainer>
      <NavContainer>
          <NavLink to={"/user"}>
            <p>{authUser.firstName}</p>
            <FontAwesomeIcon icon={faUserCircle} />
          </NavLink>

        <div>
          <FontAwesomeIcon icon={faDoorOpen} />
          <button onClick={logout} className="btn btn-link nav-item nav-link">
            Logout
          </button>
        </div>
      </NavContainer>
    </div>
  );
}

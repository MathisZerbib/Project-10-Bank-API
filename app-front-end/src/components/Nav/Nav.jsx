import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ArgentBankLogo from "../../assets/images/argent-bank-logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { authActions, userActions } from "../../_store";

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

// const LinkContainer = styled.nav`
//   display: flex;
//   justify-content: space-evenly;
// `;

export { Nav };

function Nav() {
  const authUser = useSelector((x) => x.auth.user);
  const currentUser = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());
  const wipeUserData = ()=> dispatch(userActions.wipeUserData())

  
  function forgetUser() {
    logout()
    wipeUserData()
  }

  // only show nav when logged in
  if (!authUser)
    return (
      <div>
        <NavContainer className="main-nav">
          <NavLink to={"/"}>
            <HomeLogo src={ArgentBankLogo} />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>

          <div className="navbar-nav">
            <NavLink to={"/sign-in"}>
              <FontAwesomeIcon size="lg" icon={faUserCircle} />
              Sign-In
            </NavLink>
          </div>
        </NavContainer>
      </div>
    );

  return (
    <div>
      <NavContainer className="main-nav">
        <NavLink to={"/"}>
          <HomeLogo src={ArgentBankLogo} />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div className="navbar-nav">
          <NavLink to={"/user"} className="nav-user-link" >
            <span>{currentUser?.body?.firstName}</span>
            <FontAwesomeIcon size="lg" icon={faUserCircle} />
          </NavLink>
          <button onClick={forgetUser} className="button button-logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </button>
        </div>
      </NavContainer>
    </div>
  );
}
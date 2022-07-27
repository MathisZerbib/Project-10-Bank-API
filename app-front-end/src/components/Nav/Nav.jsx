import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import ArgentBankLogo from "../../assets/images/argent-bank-logo.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { authActions } from '../../_store';

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
    const authUser = useSelector(x => x.auth.user);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    // only show nav when logged in
    if (!authUser) 
    return (
        <NavContainer className="main-nav">
           <div className="navbar-nav">
                 <NavLink to={"/"}>
       <HomeLogo src={ArgentBankLogo} />
       <h1 className="sr-only">Argent Bank</h1>
     </NavLink>                

     <NavLink to={"/login"}>
         <FontAwesomeIcon icon={faUserCircle} />
         Sign-In
       </NavLink>
       </div>
       </NavContainer>
    );
    
    return (
         <NavContainer className="main-nav">
            <div className="navbar-nav">
                  <NavLink to={"/"}>
        <HomeLogo src={ArgentBankLogo} />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>                
      
      <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </NavContainer>
        
// <div>
// <NavContainer className="main-nav">
//       <NavLink to={"/"}>
//         <HomeLogo src={ArgentBankLogo} />
//         <h1 className="sr-only">Argent Bank</h1>
//       </NavLink>
      
//     <div>
//       <LinkContainer className="main-nav-item">
//         <NavLink className={isLinkActive} to={"/login"}>
//           <FontAwesomeIcon icon={faUserCircle} />
//           Sign-In
//         </NavLink>
//       </LinkContainer>
//     </div>
//   </NavContainer>
//     </div>

    );
}
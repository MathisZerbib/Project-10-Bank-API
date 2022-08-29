import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../_store";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import Profile from "../../components/Profile";

function User() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.profile.user);

  useEffect(() => {
    dispatch(userActions.profile());
  }, [dispatch]);


  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            {currentUser && currentUser?.body.length > 0 && (currentUser !== undefined || null) ? (
              <>Loading data</>
            ) : (
              <>
              <pre>{currentUser?.body.firstName} {currentUser?.body.lastName}</pre>
              </>
            )}
          </h1>
          <button className="button edit-button">Edit Name</button>
        </div>
        {/* <Profile /> */}

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="button  transaction-button">
              View transactions
            </button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="button  transaction-button">
              View transactions
            </button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="button  transaction-button">
              View transactions
            </button>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default User;

// import React from "react";
// import { Login } from "../Login";
// import { useSelector } from "react-redux";
// const User = () => {
//   const { user: currentUser } = useSelector((state) => state.auth);
//   if (!currentUser) {
//     return <Login />;
//   }
//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>
//           <strong>{currentUser.username}</strong> User
//         </h3>
//       </header>
//       <p>
//         <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
//         {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//       </p>
//       <p>
//         <strong>Id:</strong> {currentUser.id}
//       </p>
//       <p>
//         <strong>Email:</strong> {currentUser.email}
//       </p>
//       <strong>Authorities:</strong>
//       <ul>
//         {currentUser.roles &&
//           currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//       </ul>
//     </div>
//   );
// };
// export default User;

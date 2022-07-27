// import React from "react";

// function Login() {
//   return (
//     <div>
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form>
//           <div className="input-wrapper">

//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button className="sign-in-button">Sign In</button>
//         </form>
//       </section>
//     </main>
// </div>
//   );
// }

// export default Login;

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../../_helpers";
import { authActions } from "../../_store";

export { Login };

function Login() {
  const dispatch = useDispatch();
  const authUser = useSelector((x) => x.auth.user);
  const authError = useSelector((x) => x.auth.error);

  useEffect(() => {
    if (authUser) history.navigate("/user");
  }, [authUser]);

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ username, password }) {
    return dispatch(authActions.login({ username, password }));
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
      

        <div className="col-md-6 offset-md-3 mt-5">
          <div className="alert alert-info">
            Username: test
            <br />
            Password: test
          </div>
          <div className="card">
          <h4 className="card-header">Sign In</h4>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    {...register("username")}
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.username?.message}
                  </div>
                </div>
                <div className="form-group input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>

                <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>

                <button
                  disabled={isSubmitting}
                  className="btn btn-primary sign-in-button"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Sign In
                </button>
                {authError && (
                  <div className="alert alert-danger mt-3 mb-0">
                    {authError.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

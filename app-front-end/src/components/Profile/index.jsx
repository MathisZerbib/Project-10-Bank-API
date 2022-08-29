import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../_store";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { formActions } from "../../_store";

function Profile() {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.profile.user);
  const userError = useSelector((state) => state.profile.error);

  useEffect(() => {
    dispatch(userActions.profile());
    console.log(currentUser)
  }, [dispatch, currentUser]);


  console.log(currentUser)

  // Form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({  firstName,
    lastName })
    {
    console.log(currentUser, firstName, lastName)
  };

  return (
    <main className="main">
      <section className="container">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-body">
              <Form onSubmit={handleSubmit(onSubmit)} className="form">

              <FormGroup role="form">

                {/* FIRSTNAME */}
                <div className="form-group input-wrapper">
                  <FloatingLabel
                    controlId="firstName"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      {...register("firstName")}
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.firstName?.message}
                    </div>
                  </FloatingLabel>
                </div>



                {/* LASTNAME */}
                <div className="form-group input-wrapper">
                  <FloatingLabel
                    controlId="lastName"
                    label="Last Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                  </FloatingLabel>
                </div>
                
                <button
                  disabled={isSubmitting}
                  className="btn btn-primary sign-in-button"
                  variant="primary"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Save
                </button>
                {userError && (
                  <div className="alert alert-danger mt-3 mb-0">
                    {userError.message}
                  </div>
                )}
                </FormGroup>
              </Form>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;

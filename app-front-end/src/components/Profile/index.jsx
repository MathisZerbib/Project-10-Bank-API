import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../_store";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FloatingLabel, Form, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Profile(props) {

  const dispatch = useDispatch();
  const userError = useSelector((state) => state.profile.error);



  const getUsers = useCallback(async () => {
    return await dispatch(userActions.profile());
  }, [dispatch])


  // Form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ firstName, lastName }) {
    dispatch(userActions.update({firstName, lastName}));
    getUsers();
    props.close()
  }

  return (
    <section>
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
                defaultValue={props.firstName}
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
                defaultValue={props.lastName}
                {...register("lastName")}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </FloatingLabel>
          </div>

          <button
            disabled={isSubmitting}
            className="sign-in-button"
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
    </section>
  );
}

export default Profile;

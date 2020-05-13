import React from "react";
import * as S from "../Login/login.styled";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
// import ErrorMessage from "./ErrorMessage";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(1, "Must be a valid email address")
      .max(255, "Must be shorter than 255")
      .required("Email is required"),
    password: Yup.string()
      .min(1, "Must at least 6 characters")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "invalid password")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <S.Wrapper>
          <S.LoginContainer>
            <S.CredentialsContainer>
              <S.TitleContainer>Please sign in</S.TitleContainer>
              <S.Credentials>
                <form onSubmit={handleSubmit}>
                  <S.FieldTitle>Email</S.FieldTitle>
                  <S.Input
                    // type="email"
                    name="email"
                    Id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? "has-error" : null
                    }
                  ></S.Input>
                  {/* <ErrorMessage
                    touched={touched.email}
                    message={errors.email}
                  /> */}

                  <S.FieldTitle>Password</S.FieldTitle>
                  <S.Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                      touched.password && errors.password ? "has-error" : null
                    }
                  ></S.Input>
                  {/* <ErrorMessage
                    touched={touched.password}
                    message={errors.password}
                  /> */}
                  <S.ButtonContainer>
                    <S.SubmitButton type="submit" disabled={isSubmitting}>
                      Sign in
                    </S.SubmitButton>
                  </S.ButtonContainer>
                </form>
              </S.Credentials>
              <S.RegisterContainer>
                <S.RegisterLink>Don't have an account yet?</S.RegisterLink>
                <S.NavigationLink>
                  <Link to={"/register"}>Sign up</Link>
                </S.NavigationLink>
              </S.RegisterContainer>
            </S.CredentialsContainer>
          </S.LoginContainer>
        </S.Wrapper>
      )}
    </Formik>
  );
};

Login.defaultProps = {
  error: true,
};

Login.propTypes = {
  error: PropTypes.bool,
};
export default Login;

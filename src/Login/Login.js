import React from "react";
import * as S from "../Login/login.styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const [change, setChange] = useState({});

  //   const handleChange = (name, event) => {
  //     change[name] = event.target.value;
  //     setChange({});
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { history } = this.props;

    if (!password || !email) {
      alert("Email and password are required");
      return;
    }

    const { status } = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ password, email }),
    });

    if (status === 200) {
      history.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.LoginContainer>
          <S.CredentialsContainer>
            <S.TitleContainer>Please sign in</S.TitleContainer>
            <S.Credentials>
              <S.FieldTitle>Email</S.FieldTitle>
              <S.Input></S.Input>
              <S.FieldTitle>Password</S.FieldTitle>
              <S.Input></S.Input>
              <S.ButtonContainer>
                <S.SubmitButton type="submit">Sign in</S.SubmitButton>
              </S.ButtonContainer>
            </S.Credentials>
            {/* <S.Input
            type="email"
            placeholder="Enter email"
            value={setEmail}
            onChange={(e) => handleChange("email", e)}
          />
          <S.Input
            type="password"
            placeholder="Enter password"
            value={setPassword}
            onChange={(e) => handleChange("password", e)}
          /> */}
            <S.RegisterContainer>
              <S.RegisterLink>Don't have an account yet?</S.RegisterLink>
              <S.NavigationLink>
                <Link to={"/register"}>Sign up</Link>
              </S.NavigationLink>
            </S.RegisterContainer>
          </S.CredentialsContainer>
        </S.LoginContainer>
      </S.Wrapper>
    </form>
  );
};
export default Login;

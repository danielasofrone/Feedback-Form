import React from "react";
import * as S from "../Login/login.styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form>
      <S.Wrapper>
        <S.LoginContainer>
          <S.CredentialsContainer>
            <S.TitleContainer>Get started</S.TitleContainer>
            <S.Credentials>
              <S.Input placeholder="First and last name"></S.Input>
              <S.Input placeholder="Email"></S.Input>
              <S.Input placeholder="Password"></S.Input>
              <S.ButtonContainer>
                <S.SubmitButton type="submit">Sign in</S.SubmitButton>
              </S.ButtonContainer>
            </S.Credentials>
            <S.RegisterContainer>
              <S.RegisterLink>Already have an account?</S.RegisterLink>
              <S.NavigationLink>
                <Link to={"/login"}>Login</Link>
              </S.NavigationLink>
            </S.RegisterContainer>
          </S.CredentialsContainer>
        </S.LoginContainer>
      </S.Wrapper>
    </form>
  );
};

export default Register;

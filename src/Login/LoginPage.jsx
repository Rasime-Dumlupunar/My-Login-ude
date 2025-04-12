import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import {
  Container,
  FormWrapper,
  Button,
  EasySpan,
  DevSpan,
  StyledH2,
  StyledH3,
  StyledH4,
  DivTitle,
  Label,
  InputWrapper,
  Icon,
  InputWrapper2,
  Icon2,
  Button2,
  Forgot,
  CheckboxWrapper,
  Label2,
  Icon4,
  Icon5,
  IconWrapper,
  StyledField,
  StyledButton,
} from "./styled-components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values, form) => {
    try {
      // API isteği
      await dispatch(loginSuccess(values));
      form.reset();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const [selected, setSelected] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <FormWrapper>
        <DivTitle>
          <StyledH2>
            Welcome to <EasySpan>Easy</EasySpan>
            <DevSpan>DEV</DevSpan>
          </StyledH2>
          <StyledH3>Start your business easily</StyledH3>
        </DivTitle>

        <Form
          onSubmit={(values, form) => {
            if (!values.username || !values.password) return;
            dispatch(loginSuccess(values));
            form.reset();
          }}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Label>Username</Label>
              <InputWrapper>
                <Icon />
                <StyledField
                  name="username"
                  component="input"
                  placeholder="Name"
                />
              </InputWrapper>
              <Label>Password</Label>
              <InputWrapper2>
                <Icon2 />
                <StyledField
                  name="password"
                  component="input"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                />
                <StyledButton
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </StyledButton>
              </InputWrapper2>
              <Forgot>Forgot a password?</Forgot>
              <CheckboxWrapper>
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => setSelected(!selected)}
                />
                <Label2>Remember Me!</Label2>
              </CheckboxWrapper>
              <Button type="submit">Sign In</Button>
              <Button2 type="button" onClick={() => navigate("/register")}>
                Create Account
              </Button2>
            </form>
          )}
        />
        <StyledH4>Or Easily Using</StyledH4>
        <IconWrapper>
          <Icon4 />
          <Icon5 />
        </IconWrapper>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;

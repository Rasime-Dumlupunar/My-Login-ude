import styled from "styled-components";
import { FaFacebook, FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { GrGooglePlus } from "react-icons/gr";
import { Field } from "react-final-form";

// Login container
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Login form
export const FormWrapper = styled.div`
  background-color: white;
  padding: 70px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
`;

export const DivTitle = styled.header`
  background-color: #6db0ff;
  width: 4px;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
`;
export const StyledH2 = styled.h2`
  color: #646777;
  font-weight: 500;
  text-align: left;
  padding-left: 15px;
`;
export const StyledH3 = styled.h3`
  color: #646777;
  font-size: 13px;
  padding-left: 15px;
  font-weight: 500;
`;

export const StyledH4 = styled.h4`
  color: rgb(143, 145, 153);
  font-size: 13px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 30px 0px 20px 0px;

  &::before,
  &::after {
    content: "";
    width: 30%;
    height: 1px;
    background-color: rgb(177, 177, 177);
    margin: 10px 0px 0px 0px;
  }
  &::before {
    margin-right: 40px;
  }

  &::after {
    margin-left: 40px;
  }
`;

export const EasySpan = styled.span`
  font-weight: bold;
  color: dark-gray;
`;
export const DevSpan = styled.span`
  font-weight: bold;
  color: #6db0ff;
`;

export const Label = styled.div`
  font-size: 14px;
  margin: 25px 0 8px 0;
`;
export const InputWrapper = styled.div`
  width: 100%;
  background-color: #dddddd;
  margin: 0px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(FaRegUser)`
  background-color: #dddddd;
  width: 10%;
`;
export const Icon2 = styled(FaKey)`
  background-color: #dddddd;
  width: 10%;
  color: #646878;
`;
export const Icon3 = styled.div`
  background-color: #dddddd;
  width: 8%;
  color: #646878;
  font-size: 18px;
  justify-content: center;
  text-align: center;

  &:hover {
    color: #000000;
  }
`;
export const Icon4 = styled(FaFacebook)`
  background-color: rgba(10, 55, 114, 0.83);
  color: #ffffff;
  margin: 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 7px;

  &:hover {
    color: #646878;
    background-color: rgb(176, 174, 174);
  }
`;
export const Icon5 = styled(GrGooglePlus)`
  background-color: rgb(142, 18, 18);
  color: #ffffff;
  margin: 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 7px;

  &:hover {
    color: #646878;
    background-color: rgb(176, 174, 174);
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputWrapper2 = styled.div`
  width: 100%;
  background-color: #dddddd;
  margin: 0px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// Input fields
export const StyledField = styled(Field)`
  width: 100%;
  height: 2.3rem;
  padding: 5px;
  flex-direction: row;
  border: 1.5px solid #ddd;
  font-size: 14px;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #4ce1b6;
  }
`;
export const Input2 = styled.input`
  width: 80%;
  height: 2.3rem;
  padding: 5px;
  flex-direction: row;
  border: 1.5px solid #ddd;
  font-size: 14px;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #4ce1b6;
  }
`;
export const Forgot = styled.span`
  font-size: 12px;
  color: #6db0ff;
  display: block;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: #4ce1b6;
  }
`;
export const StyledButton = styled.div`
  font-size: 18px;
  width: 10%;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.6s ease;

  &:hover {
    color: #4ce1b6;
  }
  &:focus {
    border-color: #4ce1b6;
  }
`;

export const CheckboxWrapper = styled.span`
  display: flex;
  &:hover {
    color: #4ce1b6;
  }
  &:focus {
    color: #4ce1b6;
  }
`;

export const Label2 = styled.div`
  font-size: 14px;
  margin: 0px 10px;
`;

// Submit button
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6db0ff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  overflow: hidden; /* Yuvarlağın dışa taşmasını engeller */
  transition: color 0.6s ease;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, #6db0ff, #0056b3);
    border-radius: 30%; /* Yuvarlak form */
    transform: scale(0); /* Başlangıçta yuvarlak görünmesin */
    transition: all 0.6s linear;
    z-index: -1; /* Metnin altına yerleştir */
  }
  &:hover {
    color: white; /* Hoverda yazıyı beyaz yap */
  }
  &:hover::before {
    transform: scale(3);
    transition: all 0.6s linear;
    border-radius: 30%;
    z-index: -1;
    color: white;
  }
`;

export const Button2 = styled.button`
  width: 100%;
  padding: 12px;
  border: 1.5px solid #6db0ff;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  color: #6db0ff;
  background-color: #fff;
  position: relative;
  overflow: hidden; /* Yuvarlağın dışa taşmasını engeller */
  transition: color 0.6s linear;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, #6db0ff, #0056b3);
    border-radius: 30%; /* Yuvarlak form */
    transform: scale(0); /* Başlangıçta yuvarlak görünmesin */
    transition: all 0.6s linear;
    z-index: -1; /* Metnin altına yerleştir */
    color: white;
  }
  &:hover {
    color: white; /* Hoverda yazıyı beyaz yap */
  }
  &:hover::before {
    transform: scale(3);
    transition: all 0.6s linear;
    border-radius: 30%;
    z-index: -1;
    color: white;
  }
`;

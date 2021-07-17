import styled, { keyframes } from 'styled-components';
import Colors from '../../styles/Colors';
import { darken, lighten } from 'polished';

// animation
export const slideUp = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 20px; */
`;
export const LoginContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 768px;
  height: 480px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: ${Colors.colorWhite};
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// Box
export const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-duration: 0.65s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;
export const LeftBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  width: 50%;
  height: 100%;
`;
export const RightBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.colorWhite};
  width: 50%;
  height: 100%;
`;

// Title, Description - Text
export const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => (props.color ? props.color : Colors.colorBlack)};
`;
export const Description = styled.span`
  /* margin: 20px 0 10px 0; */
  font-weight: ${(props) => (props.bold ? props.bold : 500)};
  color: ${(props) => (props.color ? props.color : Colors.colorBlack)};
`;

// Input
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const SignInput = styled.input`
  width: 180px;
  padding: 7px 10px;
  border: none;
  border-bottom: 1px solid ${Colors.colorGrey};
  margin-top: 20px;
  transition: 0.3s ease-in-out;
  &:focus {
    border-bottom: 1px solid ${Colors.primaryColor};
  }
`;
export const ForgotPassword = styled(Description)`
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${Colors.primaryColor};
    /* font-weight: bold; */
  }
`;

// 후에 signin, signup 하나로 합치고 props 전달방식으로 변경
export const SignButton = styled.button`
  border-radius: 20px;
  text-transform: uppercase;
  background-color: ${Colors.primaryColor};
  color: white;
  width: 150px;
  padding: 12px 45px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;
export const SignInButton = styled(SignButton)`
  transition: 0.2s ease-in-out;
  /* background: ${Colors.primaryGradientColor}; */
  background-color: ${Colors.primaryColor};
  &:hover {
    background-color: ${darken(0.1, Colors.primaryColor)};
    /* background-color: white; */
    /* background: linear-gradient(to right, ${darken(0.03, Colors.primaryColor)}, ${darken(0.1, Colors.colorGradient)}); */
  }
`;

export const SignUpButton = styled(SignButton)`
  background-color: transparent;
  border: 1px solid ${Colors.colorWhite};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${Colors.colorWhite};
    color: ${Colors.primaryColor};
  }
`;

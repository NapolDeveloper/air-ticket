import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import Colors from '../../styles/Colors';
import * as S from './Sign.style';

// hooks
import useInput from '../../hooks/useInput';

const Login = () => {
  const [toggleSign, setToggleSign] = useState(false);
  return (
    <S.LoginContainer>
      <LoginLeftBox toggleSign={toggleSign} setToggleSign={setToggleSign} />
      {toggleSign ? <SignUpRightBox /> : <LoginRightBox />}
    </S.LoginContainer>
  );
};

const LoginLeftBox = ({ toggleSign, setToggleSign }) => {
  return (
    <S.LeftBox>
      <S.Title color={Colors.colorWhite}>Enter Air-Ticket</S.Title>
      <S.Description color={Colors.colorWhite}>항공권 예매를 빠르고 간단하게!</S.Description>
      <S.SignUpButton onClick={() => setToggleSign(!toggleSign)}>{toggleSign ? 'sign in' : 'sign up'}</S.SignUpButton>
    </S.LeftBox>
  );
};

const LoginRightBox = () => {
  const [{ email, password }, setText, inputReset] = useInput({ email: '', password: '' });
  const handleSignIn = () => {
    inputReset();
  };
  return (
    <S.RightBox>
      <S.Title>Sign in</S.Title>
      <S.InputWrap>
        <S.SignInput name='email' placeholder='Email' value={email} onChange={setText}></S.SignInput>
        <S.SignInput name='password' placeholder='Password' type='password' value={password} onChange={setText}></S.SignInput>
      </S.InputWrap>
      <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
      <S.SignInButton onClick={handleSignIn}>sign in</S.SignInButton>
    </S.RightBox>
  );
};

const SignUpRightBox = () => {
  const [{ id, password, passwordCheck, name }, setText, inputReset] = useInput({ id: '', password: '', passwordCheck: '', name: '' });

  // 아이디 정규표현식 검사
  const handleCheckId = () => {
    // 영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자, 끝날때 영문 대문자 또는 소문자 또는 숫자
    const idReg = /^[A-za-z0-9]{5,15}$/g;
    if (!idReg.test(id)) {
      console.error('id - 조건안맞음');
      return;
    }
    console.log('id - 조건 성립');
  };

  // 비밀번호 정규표현식, checkPassword 검사
  const handleCheckPassword = () => {
    if (password !== passwordCheck) {
      console.error('pw - 조건안맞음');
      return;
    }
    console.log('pw - 조건 성립');
    return;
  };

  // 이름 정규표현식 검사
  const handleCheckName = () => {
    const nameReg = /^[가-힣]{1,10}$/;
    if (!nameReg.test(name)) {
      console.error('name - 조건안맞음');
      return;
    }
    console.log('name - 조건 성립');
  };

  const handleSignUp = () => {
    handleCheckId();
    handleCheckPassword();
    handleCheckName();
    inputReset();
  };

  return (
    <S.RightBox>
      <S.Title>Sign up</S.Title>
      <S.InputWrap>
        <S.SignInput name='id' placeholder='Your id' type='text' value={id} onChange={setText}></S.SignInput>
        <S.SignInput name='password' placeholder='Password' type='password' value={password} onChange={setText}></S.SignInput>
        <S.SignInput name='passwordCheck' placeholder='Password check' type='password' value={passwordCheck} onChange={setText}></S.SignInput>
        <S.SignInput name='name' placeholder='name' type='text' value={name} onChange={setText}></S.SignInput>
      </S.InputWrap>
      <S.SignInButton onClick={handleSignUp}>sign up</S.SignInButton>
    </S.RightBox>
  );
};

export default Login;

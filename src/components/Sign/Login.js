import React, { useState, useMemo } from 'react';
// import { Link } from 'react-router-dom';

// components
import InputComponent from './InputBox';

// styles
import Colors from '../../styles/Colors';
import * as S from './Sign.style';

// hooks
import useInput from '../../hooks/useInput';

const Login = () => {
  // signUp, signIn Toggle State
  const [toggleSign, setToggleSign] = useState(false);
  return (
    <S.LoginContainer>
      <LoginLeftBox toggleSign={toggleSign} setToggleSign={setToggleSign} />
      {/* active - slideUp animation check props */}
      {toggleSign ? <SignUpRightBox active /> : <LoginRightBox active />}
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

  // Sign in 버튼 클릭시 이벤트. <데이터베이스랑 아이디 대조 기능 필요>
  const handleSignIn = () => {
    inputReset();
  };
  return (
    <S.RightBox>
      {/* BoxWrap = animation 적용하기 위해 넣어둠 */}
      <S.BoxWrap>
        <S.Title>Sign in</S.Title>
        <S.InputWrap>
          {/* input 컴포넌트화 시켜서 재사용하기 - 아직 미완 */}
          {/* <S.SignInput name='email' placeholder='Email' value={email} onChange={setText}></S.SignInput> */}
          {/* <S.SignInput name='password' placeholder='Password' type='password' value={password} onChange={setText}></S.SignInput> */}
          <InputComponent name='email' placeholder='Email' value={email} onChange={setText}></InputComponent>
          <InputComponent name='password' placeholder='Password' type='password' value={password} onChange={setText}></InputComponent>
        </S.InputWrap>
        <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        <S.SignInButton onClick={handleSignIn}>sign in</S.SignInButton>
      </S.BoxWrap>
    </S.RightBox>
  );
};

const SignUpRightBox = () => {
  const [{ id, password, passwordCheck, name }, setText, inputReset] = useInput({ id: '', password: '', passwordCheck: '', name: '' });
  // 임의로 지정해둔 유저 데이터 저장 포멧
  const [signDes, setSignDes] = useState('');
  const [userData, setUserData] = useState({
    id: '',
    password: '',
    name: ''
  });

  // 아이디 정규표현식 검사
  const handleCheckId = () => {
    // 영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자, 끝날때 영문 대문자 또는 소문자 또는 숫자
    const idReg = /^[A-za-z0-9]{5,15}$/g;
    if (!idReg.test(id)) {
      setSignDes('아이디를 5~15자의 영문으로 작성해주세요');
      console.log(id);
      return false;
    } else if (id.length < 1) {
      setSignDes('아이디를 입력해주세요');
      return false;
    }
    return true;
  };

  // 비밀번호 확인 함수
  const handleCheckPassword = () => {
    // 비밀번호, 비밀번호 확인
    if (checkPwMatch() === false) {
      return false;
    }
    let passwordStrengthCount = 0;
    // 비밀번호 길이가 8자 이상 15자 이하
    if (checkPwLength() === true) passwordStrengthCount++;
    // 특수문자 개수가 2개 이상일 경우 pwLevel + 1
    if (checkPwSpecial() === true) passwordStrengthCount++;
    // 대문자와 소문자 조합이 3개 이상
    if (checkPwUpperLower() === true) passwordStrengthCount++;

    // pwLevel이 2이상인지 검사
    if (passwordStrengthCount < 2) {
      setSignDes(checkPwLevel(passwordStrengthCount));
      return false;
    }
    return true;
  };

  // 비밀번호, 비밀번호 확인 두 개 동일한지 체크
  const checkPwMatch = () => {
    if (password !== passwordCheck) {
      setSignDes('비밀번호가 동일하지 않습니다');
      return false;
    } else if (password === '') {
      setSignDes('비밀번호를 입력해주세요');
      return false;
    }
    return true;
  };

  // 비밀번호 길이가 8자 이상 15자 이하
  const checkPwLength = () => {
    if (password.length >= 8 && password.length <= 15) {
      // setPwLevel((previous) => previous + 1);
      return true;
    }
    return false;
  };

  // 특수문자 개수가 2개 이상일 경우
  const checkPwSpecial = () => {
    const result = password.match(/[\][,.~!@%^&]/gi);
    if (result === null) {
      return;
    }
    if (result.length >= 2) {
      return true;
    }
    return false;
  };

  // 대소문자 조건
  const checkPwUpperLower = () => {
    const upResult = password.match(/[A-Z]/gm);
    const lowResult = password.match(/[a-z]/gm);

    if (upResult === null || lowResult === null) {
      return false;
    }
    if (upResult.length >= 2 && lowResult.length >= 1) {
      return true;
    } else if (upResult.length >= 1 && lowResult.length >= 2) {
      return true;
    }
    return false;
  };

  // pwLevel이 2이상인지 검사
  const checkPwLevel = (passwordStrengthCount) => {
    switch (passwordStrengthCount) {
      case 1:
        return '비밀번호의 강도가 약합니다';
      case 2:
        return '중';
      case 3:
        return '강';
      default:
        return;
    }
  };

  // 이름 정규표현식 검사
  const handleCheckName = () => {
    const nameReg = /^[가-힣]{1,10}$/;
    if (!nameReg.test(name) || name === '') {
      setSignDes('이름을 입력해주세요');
      return false;
    }
    return true;
  };

  // Sign up 버튼 클릭시 실행
  const handleSignUp = () => {
    if (handleCheckId() === false) return;

    if (handleCheckPassword() === false) return;

    if (handleCheckName() === false) return;

    setUserData({ id, password, name });

    // 위에서 return을 사용하여 모두 성립하지 않으면 inputReset() 실행되지 않음
    // 가입 성공시 초기화
    inputReset();
    setSignDes('');
    console.log(userData);
  };

  return (
    <S.RightBox>
      <S.BoxWrap>
        <S.Title>Sign up</S.Title>
        <S.InputWrap>
          <InputComponent name='id' placeholder='Your id' type='text' value={id} onChange={setText}></InputComponent>
          <InputComponent name='password' placeholder='Password' type='password' value={password} onChange={setText}></InputComponent>
          <InputComponent name='passwordCheck' placeholder='Password check' type='password' value={passwordCheck} onChange={setText}></InputComponent>
          <InputComponent name='name' placeholder='name' type='text' value={name} onChange={setText}></InputComponent>
        </S.InputWrap>
        <S.Description color={Colors.primaryColor}>{signDes}</S.Description>
        <S.SignInButton onClick={handleSignUp}>sign up</S.SignInButton>
      </S.BoxWrap>
    </S.RightBox>
  );
};

export default Login;

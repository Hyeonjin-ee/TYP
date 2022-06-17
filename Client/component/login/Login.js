import React, { useState } from 'react'
import styles from './Login.module.css'
import { useRouter } from 'next/router';
import { postLoginAPI } from '../../lib/api/login';
const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const router = useRouter();
    const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    };
    const login = () => {
    const data = {
      email: email,
      password: password,
    }
    postLoginAPI(data);
    router.replace('/');
  }
  return (
<div className={styles[ "wrapper" ]}>
    <section className={styles[ "login-container" ]}>
  <div>
    <h1 className={styles[ "h1" ]}>로그인</h1>
  </div>
    <div className={styles[ "email-container" ]}>
        <input className={styles[ "email" ]} onChange={emailChangeHandler} id='login-id' placeholder="email를 입력하세요" type="text"></input>
    </div>
    <div className={styles[ "password-container" ]}>
        <input className={styles[ "password" ]} onChange={passwordChangeHandler} id='login-pw' placeholder="비밀번호를 입력하세요" type="password"></input>
    </div>
    <div className={styles[ "button-container" ]}>
        <button className={styles[ "button" ]} type="submit" onClick={login} id="login-btn">로그인</button>
    </div>
</section>
</div>
  )
}
export default Login
import React from 'react'
import styles from './Header.module.css'
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter();

  const login = () => {
    router.push('/login') //로그인 페이지
}
   
    
  const signup = () => {
      router.push('/signup') // 회원가입 페이지

 }

  return (
    // a 태그를 href로 넘겨도 되는 건지? 처음으로 돌아가기라 상관없나요?
    <div className={styles['header-container']}>
      <header className={styles['header-header']}>
        <a href='/' className={styles['header-main']}>
          <h1 className={styles['header-typ']}>TYP</h1>
          <h7 className={styles['header-sub']}>trip your picks</h7>
        </a>
        <nav className={styles['header-nav']}>
          <ul className={styles['header-ul']}>
            <li className={styles['header-li']}>
              <a onClick={login} className={styles['header-a']}>로그인</a>{/* 로그인페이지 */}
            </li>
            <li className={styles['header-li']}>
              <a onClick={signup} className={styles['header-a']}>회원가입</a>{/* 회원가입 페이지 */}
            </li>
          </ul>
        </nav>
      </header>
      <hr></hr>
    </div>
     
  )
}

export default Header
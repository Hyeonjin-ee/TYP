import React from 'react'
import styles from './Main.module.css';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter();

  const survay = () => {
    router.push('/survay')
  }

  return (
    <div className={styles['wrapper']}>
    <div className={styles['main-container']}>
    <div className={styles['main-1']}>
      <h2 className={styles['main-2']}>
        <b>키워드로 추천하는 여행 경로</b>
      </h2>
      <h1 className={styles['main-3']}>
        <b>TYP</b>
      </h1>
      <div>
        <button onClick={survay} className={styles['main-5']}>시작하기</button>
      </div>
      </div>
      <div className={styles['main-6']}>
        <img className={styles['image']} src={'/image/fly.jpg'} alt='이미지테스트' />
      </div>
    </div>
    </div>

  )
}

export default Main
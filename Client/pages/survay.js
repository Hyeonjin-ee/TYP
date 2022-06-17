import React from 'react'
import PreIcon from '../public/static/svg/pre.svg'
import NextIcon from '../public/static/svg/next.svg'
import Header from '../Layout/Header/Header'
import styles from './survay.module.css'
import { useRouter } from 'next/router'
import Survay from '../component/survay/Survay'

const survay = () => {
  const router = useRouter();

  const pre = () => {
    router.push('/')
  }

  const next = () => {
    router.push('/map')
  }


  return (
    <>
      <Header />
      <div className={styles['survay-detail']}>
        <h2>TYP 설문조사 입니다</h2>
        <h7>해당 설문조사는 고객님의 여행 선호도와 형태를 분석하기 위함 입니다.
        </h7>
        
      </div>
      <div className={styles['survay']}>
      <Survay/>
      
      </div>
      <div className={styles['icon-container']}>
        <div className={styles['icon-pre']}  onClick={pre}>
          <PreIcon  />
        </div>
        <div className={styles['icon-next']} onClick={next}>
          <NextIcon />
        </div>
      </div>
    </>
  )
}

export default survay
/* global kakao */
import React from 'react'
import Map from '../component/Map.js/Map'
import Leftbar from '../component/sidebar/leftbar/Leftbar'
import Rightbar from '../component/sidebar/rightbar/Rightbar'
import Header from '../Layout/Header/Header'
import styles from './mainservice.module.css'

const mainservice = () => {
  return (
    <>
  <div className={styles['section']}></div>
    <Header/>
  <div className={styles['left']}>
    <Leftbar/>
  </div>
  <div className={styles['center']}>
    <Map />
  </div>
  <div className={styles['right']}>
    <Rightbar/>
  </div>
    
    
    </>
  )
}

export default mainservice
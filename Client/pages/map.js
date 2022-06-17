import React from 'react'
import Header from '../Layout/Header/Header';
import styles from './survay.module.css'
import { useRouter } from 'next/router'



const map = () => {

    
    const router = useRouter();

    const pre1 = () => {
        router.push('/survay')
    }
        
    const next1 = () => {
        router.push('/mainservice')
    }

  return (
    <>
    
        <Header />
            <div className={styles['survay-detail']}>
                <h2>Seoul Tour Map</h2>
                <h7>목표로 하는 지역을 선택해주세요</h7>
            </div>
        <div className={styles['map-icon']}>
            <img src='https://www.seoul.go.kr/res_newseoul/images/seoul/seoul_map.gif' useMap='#map' alt='서울지도'/>
            <map name='map' id='map'>
                <area shape='rect' coords='227,158,261,179' href='/mainservice' title='종로구입니다.' alt='종로구입니다'/>
                <area shape='rect' coords='337,207,373,230' href='/mainservice' title='광진구입니다.' alt='광진구입니다'/>
            </map>
        </div>
        {/* <div className={styles['icon-container']}>
        <div className={styles['icon-pre']}  onClick={pre1}>
          <PreIcon  />
        </div>
        <div className={styles['icon-next']} onClick={next1}>
          <NextIcon />
        </div>
      </div> */}
      
      
    </>
  )
}

export default map
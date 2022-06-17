import React from 'react'
import styles from './Second.module.css'

const Second = () => {
  




    // 여러개 체크해야 되는 것은 type를 check box로 함
  return (
    <>
    <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>관광지는?</span>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="4" /><span>자연</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="3" /><span>역사</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="2" /><span>휴양</span></label>
    </div>
    <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>다른 키워드는?</span>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="4" /><span>공연/행사</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="3" /><span>문화시설</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="2" /><span>레포츠</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="4" /><span>쇼핑</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="3" /><span>식당</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay1" value="2" /><span>카페</span></label>
       
    </div>
    </>
  )
}

export default Second
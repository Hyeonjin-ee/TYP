import React from 'react'
import styles from './Keyward.module.css'

const Keyward = () => {
  return (
    <>
    {/* 놀거리 */}
    <div className={styles['keyward-container']}>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="4" /><span>공연장</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="3" /><span>영화관</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="2" /><span>일반매장</span></label>
        <label className={styles['keyward-label']}><input type="checkbox" name="survay1" value="4" /><span>놀이시설</span></label>
    </div>
    </>
  )
}

export default Keyward
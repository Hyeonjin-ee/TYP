import React from 'react'
import styles from './Info.module.css'

const info = () => {
  return (
    <>
    {/* 놀거리  */}
    <div className={styles['info-container']}>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="1" /><span>가족이랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="2" /><span>친구랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="3" /><span>연인이랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="1" /><span>20대</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="2" /><span>30대</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="3" /><span>공원</span></label>
    </div>


    {/* <div className={styles['info-container']}>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="1" /><span>가족이랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="2" /><span>친구랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay1" value="3" /><span>연인이랑</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="1" /><span>20대</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="2" /><span>30대</span></label>
        <label className={styles['info-label']}><input type="checkbox" name="survay2" value="3" /><span>공원</span></label>
    </div> */}

    </>
  )
}

export default info
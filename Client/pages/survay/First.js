import React  from 'react'
import styles from './First.module.css'



const First = () => {

    return (
        //  한 가지만 체크를 해야 할때는 type를 radio로 쓴다     
        <>
            <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>누구랑?</span>
                <label className={styles['survay-label']}><input type="radio" name="survay1" value="혼자" /><span>혼자</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay1" value="친구랑" /><span>친구랑</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay1" value="연인이랑" /><span>연인이랑</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay1" value="가족이랑" /><span>가족이랑</span></label>
            </div>

            <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>숙소는?</span>
                <label className={styles['survay-label']}><input type="radio" name="survay2" value="비싸야지" /><span>비싸야지</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay2" value="적당하면됨" /><span>적당하면됨</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay2" value="가성비" /><span>가성비</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay2" value="누우면됨" /><span>누우면됨</span></label>
            </div>

            <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>먹는건?</span>
                <label className={styles['survay-label']}><input type="radio" name="survay3" value="5만원 이상" /><span>1만원</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay3" value="3만원~5만원" /><span>1만원~3만원</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay3" value="1만원~3만원" /><span>3만원~5만원</span></label>
                <label className={styles['survay-label']}><input type="radio" name="survay3" value="1만원" /><span>5만원 이상</span></label>
            </div>
        </>
    )
}

export default First
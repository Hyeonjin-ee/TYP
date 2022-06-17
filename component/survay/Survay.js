import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { postKeywordAPI } from '../../lib/api/keyword';
import styles from './Survay.module.css'

const Survay = () => {
    const [withNum, setWithNum] = useState('');
    const [houseStyle, setHouseStyle] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [nature, setNature] = useState('');
    const [history, setHistory] = useState('');
    const [resting, setResting] = useState('');

    const router = useRouter();

    const withNumChangeHandler = (event) => {
        setWithNum(event.target.value)
    }
    const houseStyleChangeHandler = (event) => {
        setHouseStyle(event.target.value)
    }
    const foodPriceChangeHandler = (event) => {
        setFoodPrice(event.target.value)
    }
    const natureChangeHandler = (event) => {
        setNature(event.target.value)
    }
    const historyChangeHandler = (event) => {
        setHistory(event.target.value)
    }
    const restingChangeHandler = (event) => {
        setResting(event.target.value)
    }

    const survay = () => {
        const data = {
            withNum : withNum,
            houseStyle: houseStyle,
            foodPrice: foodPrice,
            nature: nature,
            history: history,
            resting: resting,
        }

        postKeywordAPI(data);

        router.push('/map')
    }





  return (
     <div className={styles['survay-wrap']}>
         <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>누구랑?</span>
                <label className={styles['survay-label']}><input onClick={withNumChangeHandler} type="radio" name="survay1" value="1" /><span>혼자</span></label>
                <label className={styles['survay-label']}><input onClick={withNumChangeHandler} type="radio" name="survay1" value="2" /><span>친구랑</span></label>
                <label className={styles['survay-label']}><input onClick={withNumChangeHandler} type="radio" name="survay1" value="3" /><span>연인이랑</span></label>
                <label className={styles['survay-label']}><input onClick={withNumChangeHandler} type="radio" name="survay1" value="4" /><span>가족이랑</span></label>
        </div>

        <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>숙소는?</span>
                <label className={styles['survay-label']}><input onClick={houseStyleChangeHandler} type="radio" name="survay2" value="1" /><span>비싸야지</span></label>
                <label className={styles['survay-label']}><input onClick={houseStyleChangeHandler} type="radio" name="survay2" value="2" /><span>적당하면됨</span></label>
                <label className={styles['survay-label']}><input onClick={houseStyleChangeHandler} type="radio" name="survay2" value="3" /><span>가성비</span></label>
                <label className={styles['survay-label']}><input onClick={houseStyleChangeHandler} type="radio" name="survay2" value="4" /><span>누우면됨</span></label>
        </div>

        <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>먹는건?</span>
                <label className={styles['survay-label']}><input onClick={foodPriceChangeHandler} type="radio" name="survay3" value="1" /><span>1만원</span></label>
                <label className={styles['survay-label']}><input onClick={foodPriceChangeHandler} type="radio" name="survay3" value="2" /><span>1만원~3만원</span></label>
                <label className={styles['survay-label']}><input onClick={foodPriceChangeHandler} type="radio" name="survay3" value="3" /><span>3만원~5만원</span></label>
                <label className={styles['survay-label']}><input onClick={foodPriceChangeHandler}type="radio" name="survay3" value="4" /><span>5만원 이상</span></label>
        </div>

        <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>자연?</span>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="1" /><span>강</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="2" /><span>공원</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="3" /><span>명산</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="4" /><span>섬</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="5" /><span>휴양림</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="6" /><span>폭포</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="7" /><span>호수</span></label>
                <label className={styles['survay-label']}><input onClick={natureChangeHandler} type="checkbox" name="survay4" value="8" /><span>등대</span></label>
        </div>

        <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>역사?</span>
                <label className={styles['survay-label']}><input onClick={historyChangeHandler} type="checkbox" name="survay5" value="1" /><span>고궁</span></label>
                <label className={styles['survay-label']}><input onClick={historyChangeHandler} type="checkbox" name="survay5" value="2" /><span>고택</span></label>
                <label className={styles['survay-label']}><input onClick={historyChangeHandler} type="checkbox" name="survay5" value="3" /><span>능묘</span></label>
                <label className={styles['survay-label']}><input onClick={historyChangeHandler} type="checkbox" name="survay5" value="4" /><span>문화유적지</span></label>
                <label className={styles['survay-label']}><input onClick={historyChangeHandler} type="checkbox" name="survay5" value="5" /><span>기념비</span></label>
        </div>

        <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>휴양?</span>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="1" /><span>동식물원</span></label>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="2" /><span>온천</span></label>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="3" /><span>수족관</span></label>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="4" /><span>유원지</span></label>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="5" /><span>놀이시설</span></label>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="6" /><span>테마파크</span></label>
                <label className={styles['survay-label']}><input onClick={restingChangeHandler} type="checkbox" name="survay6" value="7" /><span>종합위락시설</span></label>
        </div>



        <div className={styles['survay-container']}>
                <span className={styles['survay-span']}>세부키워드</span>
                <label className={styles['survay-label']}><input type="checkbox" name="survay7" value="1" /><span>공연/행사</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay7" value="2" /><span>문화시설</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay7" value="3" /><span>레포츠</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay7" value="4" /><span>쇼핑</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay7" value="5" /><span>식당</span></label>
                <label className={styles['survay-label']}><input type="checkbox" name="survay7" value="6" /><span>카페</span></label>
        </div>
        
        <div>
				<div className={styles["survay-btn-container"]}>
					<button onClick={survay} className={styles["survay-btn"]} type="submit"  id="signup-btn">제출하기</button>
                </div>
        </div>
     </div>   
  )
}

export default Survay
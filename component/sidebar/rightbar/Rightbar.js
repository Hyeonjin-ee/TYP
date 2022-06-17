import React from 'react'
import styles from './Rightbar.module.css'

const Rightbar = () => {


    return (

        // 숙소
        < div className = { styles['wrapper']} >
            <div className={styles['search-wrap']}>
                <input className={styles['search']} type="text" placeholder="검색어 입력"/>
            </div>
            <div className={styles['entire-wrap']}>
                <div className={styles['btn-wrap']}>
                    <button className={styles['btn']}>숙소</button>
                    <button className={styles['btn']}>먹거리</button>
                    <button className={styles['btn']}>놀거리</button>
                </div>
                <div className={styles['list-container']}>
                                        <ul className={styles['ul']}>
        <div className={styles['divli-container']}>
        <div className={styles['h7']}>그랜드 워커힐 서울</div>
        <li className={styles['li']}>
            <div className={styles['content']}>
            <img className={styles['image']} src='https://media.staticontent.com/media/pictures/bce97548-c3a0-46cd-b368-d5a5145ef364' alt='이미지 안나와여' />
                <div className={styles['checkbox-wrap']}>
                    <input className={styles['input']} type="checkbox"/>
                </div>
            </div>
        </li>
        </div>
        <div className={styles['divli-container']}>
        <div className={styles['h7']}>비스타 워커힐 서울</div>
        <li className={styles['li']}>
            <div className={styles['content']}>
            <img className={styles['image']} src='https://photos.hotelbeds.com/giata/original/09/095886/095886a_hb_a_097.jpg' alt='이미지 안나와여' />
                <div className={styles['checkbox-wrap']}>
                    <input className={styles['input']} type="checkbox"/>
                </div>
            </div>
        </li>
        </div>
        <div className={styles['divli-container']}>
        <div className={styles['h7']}>동서울 호텔</div>
        <li className={styles['li']}>
            <div className={styles['content']}>
            <img className={styles['image']} src='https://media.staticontent.com/media/pictures/5b4adf95-36dc-4131-8b63-0ac25448826b' alt='이미지 안나와여' />
                <div className={styles['checkbox-wrap']}>
                    <input className={styles['input']} type="checkbox"/>
                </div>
            </div>
        </li>
        </div>
        <div className={styles['divli-container']}>
        <div className={styles['h7']}>호텔 더 디자이너 스피리미어 건대</div>
        <li className={styles['li']}>
            <div className={styles['content']}>
            <img className={styles['image']} src='https://images.trvl-media.com/hotels/23000000/22470000/22461800/22461723/b94134ee_z.jpg' alt='이미지 안나와여' />
                <div className={styles['checkbox-wrap']}>
                    <input className={styles['input']} type="checkbox"/>
                </div>
            </div>
        </li>
        </div>
        <div className={styles['divli-container']}>
        <div className={styles['h7']}>에이치 에비뉴 건대점</div>
        <li className={styles['li']}>
            <div className={styles['content']}>
                <div className={styles['checkbox-wrap']}>
                <img className={styles['image']} src='https://images.trvl-media.com/hotels/23000000/22180000/22170800/22170799/6c597f33_z.jpg' alt='이미지 안나와여' />
                    <input className={styles['input']} type="checkbox"/>
                </div>
            </div>
        </li>
        </div>
        <div className={styles['divli-container']}>
        <div className={styles['h7']}>호텔 부티크나인 능동점</div>
        <li className={styles['li']}>
            <div className={styles['content']}>
            <img className={styles['image']} src='https://images.trvl-media.com/hotels/18000000/17790000/17786200/17786157/7a8d14be_z.jpg' alt='이미지 안나와여' />
                <div className={styles['checkbox-wrap']}>
                    <input className={styles['input']} type="checkbox"/>
                </div>
            </div>
        </li>
        </div>
    </ul>
</div>            
</div>        
</div >

                // 먹거리
        // <div className={styles['wrapper']}>
        //     <div className={styles['search-wrap']}>
        //         <input className={styles['search']} type="text" placeholder="검색어 입력"/>
        //     </div>
        //     <div className={styles['entire-wrap']}>
        //         <div className={styles['btn-wrap']}>
        //             <button className={styles['btn']}>숙소</button>
        //             <button className={styles['btn']}>먹거리</button>
        //             <button className={styles['btn']}>놀거리</button>
        //         </div>
        //         <div className={styles['list-container']}>
        //             <ul className={styles['ul']}>
        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>소문난숯불구이</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/eat1.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>신선설농탕광나루역점</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/eat2.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>마루샤브아차산역점</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/eat3.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>제주탐하리</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/eat4.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>택이네조개전골군자역점</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                         <div className={styles['checkbox-wrap']}>
        //                         <img className={styles['image']} src={'/image/eat5.jpg'} alt='이미지 안나와여' />
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>평창닭다리살고추장불고기</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/eat6.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //             </ul>
        //         </div>
        //     </div>
        // </div>


        // 놀거리

        // <div className={styles['wrapper']}>
        //     <div className={styles['search-wrap']}>
        //         <input className={styles['search']} type="text" placeholder="검색어 입력"/>
        //     </div>
        //     <div className={styles['entire-wrap']}>
        //         <div className={styles['btn-wrap']}>
        //             <button className={styles['btn']}>숙소</button>
        //             <button className={styles['btn']}>먹거리</button>
        //             <button className={styles['btn']}>놀거리</button>
        //         </div>
        //         <div className={styles['list-container']}>
        //             <ul className={styles['ul']}>
        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>CGV 건대입구</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/cgv.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>예스24라이브홀 </div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/yes24.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>어린이대공원</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/children.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>워커힐 숲길</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/walkerhill.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>커먼 그라운드</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                         <div className={styles['checkbox-wrap']}>
        //                         <img className={styles['image']} src={'/image/ground.jpg'} alt='이미지 안나와여' />
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //                 <div className={styles['divli-container']}>
        //                 <div className={styles['h7']}>고릴라 캠핑</div>
        //                 <li className={styles['li']}>
        //                     <div className={styles['content']}>
        //                     <img className={styles['image']} src={'/image/camp.jpg'} alt='이미지 안나와여' />
        //                         <div className={styles['checkbox-wrap']}>
        //                             <input className={styles['input']} type="checkbox"/>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 </div>

        //             </ul>
        //         </div>
        //     </div>
        // </div>

        
    )
}

export default Rightbar
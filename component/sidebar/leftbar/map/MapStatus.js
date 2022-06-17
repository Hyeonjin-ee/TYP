import React from 'react'
import Cart from '../../../../public/static/svg/cart.svg'
import styles from './MapStatus.module.css'
import { useRouter } from 'next/router'


const MapStatus = () => {

  const router = useRouter();

  const cart = () => {
    router.push('/')
  }



  return (
    <>
      <div className={styles['main']}>
        <div>
          <h2>광진구</h2>
        </div>
        <div className={styles['icon-cart']} onClick={cart}>
          <Cart />
        </div>
      </div>
      
    </>
  )
}

export default MapStatus
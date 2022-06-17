import React from 'react'
import Info from './info/Info'
import Keyward from './keyward/Keyward'
import MapStatus from './map/MapStatus.js'

const Leftbar = () => {
  return (
    <>
    <div>
        <MapStatus />
        <hr/>
        <Info />
        <hr/>
        <Keyward/>
    </div>
    </>

  )
}

export default Leftbar
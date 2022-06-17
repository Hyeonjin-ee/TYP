import React, { useState, useEffect } from 'react'

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const $script = document.createElement('script');
    console.log($script);
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f6030893c8db256b0171d97340aeda47`
    $script.type = `text/javascript`;
    $script.addEventListener("load", () => setMapLoaded(true));
    console.log(mapLoaded);
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) {
      console.log('not loaded');
      return;
    }

    kakao.maps.load(() => {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = { //지도를 생성할 때 필요한 기본 옵션
        // center: new kakao.maps.LatLng(37.575918 , 126.973619), //지도의 중심좌표.
        

       // 그랜드 워커힐  37.55518759499112, 127.11051338362907
       // 소문난숯불구이 37.53207741878656, 127.07564974284824
       // cgv 건대입구 37.53964658269139, 127.06692790925526
        center: new kakao.maps.LatLng(37.540384 , 127.069340), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      }
  
      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴}
    })
  }, [mapLoaded]);
  
  
  return (
    <div id="map" style={{width: '900px', height: '700px'}}></div>
  )

}

export default Map
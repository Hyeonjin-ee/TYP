# **TYP (Take Your Pick :point_left:)** 
<br/>
<br/>

## **0. 팀원 소개**
### [ FrontEnd ]
- ### :dog: 송 준 
- ### :tiger: 장영광 

### [ BackEnd ]
- ### :mouse: 김현진 [https://github.com/Hyeonjin-ee]
- ### :tiger: 황지원 
<br/>

### [ Github repo ]
#### FE : https://github.com/glory9802/typ-frontend.git
#### BE : https://github.com/Hyeonjin-ee/TYP_backend.git
<br/>
<br/>


## **1. 기술 스택**
- ### FE : HTTP/CSS, Next.js
- ### BE : SpringBoot, Gradle, JAVA, JPA, Lombok, MySQL
<br/>
<br/>


## **2. 프로젝트 주제**
### "키워드"를 통한 사용자 맞춤 여행지 추천 웹 서비스 :tram: :palm_tree: :camera:
<br/>

- FlowChart

<img src="https://user-images.githubusercontent.com/63301908/174037416-da5cf965-1933-4704-a190-c854bfe68b49.png">

<br/>

- 프로토 타입

<img src="https://user-images.githubusercontent.com/63301908/174037826-905a099b-a0d1-442d-8d6a-e4f67f91efff.png" width=600>

<img src="https://user-images.githubusercontent.com/63301908/174038158-b71a91b6-78a5-4c03-8b0c-647fea033fff.png" width=600>

<img src="https://user-images.githubusercontent.com/63301908/174038262-dfc147bc-d9e6-498d-bdd6-460b8df65f79.png" width=600>

<img src="https://user-images.githubusercontent.com/63301908/174038427-0bfbe839-34a2-470c-a61e-871e29aba847.png" width=600>


<br/>
<br/>

## **3. 도메인 용어 정리 / ERD 테이블**
  ![midproject erd](https://user-images.githubusercontent.com/69191828/174039849-e0771fbe-a81a-49fa-8a88-a287b71e9686.png)

  <br/>

  ### [User : 회원 정보 테이블]
    - user_id : 회원 번호 (PK)
    - user_email : 회원 email
    - user_pwd : 회원 비밀번호
    - user_name : 회원 이름
    - user_birthdate : 회원 생년월일
    - user_phonenum : 회원 전화번호
    - user_status : 회원 로그인 상태 
    - user_image : 회원 사진
  <br/>
  <br/>
  

 ### [Keyword : 설문 응답 정보 테이블]
    - kw_id : 설문 결과 키워드로 구성된 일련번호 (Pk)
    - kw_withnum : 구성원 정보
    - kw_age : 사용자 연령대
      - 10대, 20대, 30대, 40대 이상
    - kw_house : 숙소 형태 
    - kw_foodprice : 먹거리 가격대 
      - 1만원 이하, 1-3만원, 3-5만원, 5만원 이상
    - kw_nature : 자연관광지 
      - 공원, 산, 생태관광지, 자연휴양림, 수목원, 폭포 /계곡, 바다, 호수/하천, 동굴 
    - kw_history : 역사문화관광지 
      - 고궁(성, 문 포함), 고택/민속마을(생가), 유적지/사적지, 종교성지(사찰), 안보관광
    - kw_resting : 휴양관광지 
      - 유원지, 놀이시설, 온천/욕장/스파(이색찜질방), 헬스투어, 테마파크, 유람선/잠수함, 동물원, 수족관
    - kw_performance : 공연/행사 
      -  공연장(음악회,뮤지컬,오페라,무용), 영화관, 극장(연극), 스포츠경기, 축제
    - kw_culture : 문화시설 
      -  박물관, 미술관, 전시장/관, 도서관, 카지노, 문화원
    - kw_leports : 레포츠 
      - 육상(테니스와 같은 구기종목), 수상, 항공
    - kw_shopping : 쇼핑 
      - 시장, 백화점, 면세점, 일반매장(상가), 공예/공방, 관광기념품점(특산물)
    - kw_food : 식음료 
      - 한식, 중식, 일식, 양식, 이색음식, 뷔페, (디저트)카페, 바 
  <br/>
  <br/>

 ### [place : 여행지 테이블]
    - place_id : 여행지 번호(PK)
    - place_name : 여행지 이름
    - place_address : 여행지 주소
    - place_image : 여행지 이미지
    - place_x : 여행지 경도(x 좌표)
    - place_y : 여행지 위도(y 좌표)
  <br/>
  <br/>

### [area : 지역 테이블]
    - area_id : 지역 번호(PK)
    - area_name : 지역 이름
    - area_address : 지역 주소
    - area_x : 지역 경도(x 좌표)
    - area_y : 지역 위도(y 좌표)
<br/>
<br/>

### [team : 팀 테이블]
    - team_id : 팀 번호(PK)
  
<br/>
<br/>

### [team_join : 팀 조인 테이블]
    - team_join_id : 팀 조인 번호(PK)

<br/>
<br/>

## **4. 기능 명세**
### **모든 페이지**

- 상단의 로고를 클릭할 시, 시작페이지로 이동한다.
- 회원가입/로그인을 클릭할 시, 회원가입/로그인 페이지로 이동한다.
<br/>
<br/>

### **시작페이지**

- 회원 / 비회원은 시작 버튼을 누를 수 있다.
- 시작 버튼을 눌렀을 때, 설문조사 페이지로 이동된다.
<br/>
<br/>

### **회원가입 / 로그인 페이지** 

- 회원은 고유한 ID로 식별한다.
- 회원은 회원가입 시에 E-mail, 비밀번호, 이름, 생년월일, 연락처, 성별을 입력해야 한다.
- 로그인 시, E-mail이나 비밀번호를 잘못 입력하면 경고창이 뜬다.
<br/>
<br/>

### **마이페이지**

- 회원은 자신의 정보를 수정할 수 있다.
- 회원은 자신의 사진을 등록/삭제를 할 수 있다.
- 회원은 여행 팀원을 초대할 수 있고, 이는 하나의 팀 ID로 식별한다.
- 팀장은 팀원 삭제가 가능하다.
- 설문조사 버튼을 누를 시 설문조사 페이지로 이동한다.
<br/>
<br/>

### **키워드 선택을 위한 설문조사 페이지**

- 회원 / 비회원은 기초 설문 페이지에서 단일 선택만 가능하다. (여행 인원, 숙소 취향, 먹거리 가격대)
- 회원 / 비회원은 세부 설문 페이지에서 중복 선택이 가능하다. (관광지 유형)
- 회원 / 비회원으로부터 선택이 된 키워드는 색상 변화가 생겨 다른 키워드와의 구분이 이루어진다.
- 키워드 리스트는 가로 스크롤이 가능하다.
- 하단의 뒤로가기 버튼과 다음 버튼을 통해 설문조사 페이지 간 이동이 가능하다.
<br/>
<br/>

### **지역 선택 페이지**

- 회원/비회원은 지역을 단일 선택할 수 있다.
- 회원/비회원은 지역 중복 선택을 시도할 시, 경고창이 뜬다.
- 선택된 지도 영역은 색상 변화가 생겨 다른 지역과의 구분이 이루어진다.
- 하단의 다음 버튼을 누를 시, 메인 서비스 페이지로 이동한다.
- 하단의 뒤로가기 버튼을 누를 시, 세부 설문조사 페이지로 이동한다.
<br/>
<br/>



### **키워드를 통한 여행지 추천 - 메인 서비스 페이지**

- 키워드 탭 (Left Side Bar) :
    - 상단에서는 지역 정보와 회원/팀 정보를 확인할 수 있다.
    - 비회원일 시에는 회원정보를 확인할 수 없다.
    - (보류) 장바구니 아이콘을 클릭할 시 장바구니 페이지로 이동한다.
    - 기초 설문 결과 키워드가 중안부에 나타난다.
    - 기초 설문 결과 키워드는 항목에 따라 색상이 구분된다.
    - 세부 설문 결과 키워드는 하단부에 나타난다.
    - 세부 설문 결과 하위 키워드는 상위 키워드에 따라 그룹으로 지정된다.
    - 세부 설문 결과 키워드는 항목에 따라 색상이 구분된다.
    - 설문 결과 키워드는 삭제가 가능하다.

<br/>
        
- 지도 탭 :
    - 지도는 선택한 지역을 보여준다.
    - 마우스로 이동할 시 선택한 지역 외에 다른 지역도 볼 수 있다.
    - 사용자가 선택한 키워드에 따라 관련된 결과 여행지를 지도에 핀(pin)으로 보여준다.
    - 핀은 항목(숙소/먹거리/놀거리)에 따라 색상으로 구분된다.
    - 핀은 항목별로 선택/해제가 가능하다.

<br/>
    
- 놀거리 리스트 탭 (Right Side Bar):
    - 설문 결과 키워드에 따른 여행지 리스트를 보여준다.
    - 각 여행지는 항목별 탭으로 구분된다.
    - 각 여행지는 선택 박스를 클릭할 시, 장바구니에 등록된다.
    - 해당 페이지가 로딩되었을 때 기본값으로 놀거리 리스트를 보여준다.
    - 항목 탭을 누를 시, 해당하는 정보만 리스트로 보여준다.
    - 상단 검색 기능을 통해 원하는 정보를 얻을 수 있다.
    - 리스트 탭을 버튼을 클릭할 시, 열기/접기가 가능하다.

<br/>
<br/>

###  [시연 영상]
<br/>

![start-map](https://user-images.githubusercontent.com/99165620/174206456-93b8abe3-b570-44c1-93a1-190f75d9b033.gif)

![image](https://user-images.githubusercontent.com/99165620/174212634-7d061da7-5df0-40d2-a3f6-2bf7eba47050.png)

![map - mainservice](https://user-images.githubusercontent.com/99165620/174206512-6e74cfd7-6bd4-41ca-aa99-25fb69247a94.gif)






<br/>
<br/>

## **5. API 명세**
#
- ### **User**
![midproject user api](https://user-images.githubusercontent.com/69191828/174035202-58b1b09a-2a30-4cad-8b08-6984a36baeb8.png)
<br/>
<br/>

- ### **Team**
![midproject team api](https://user-images.githubusercontent.com/69191828/174037860-bec8e9a2-aa6f-4f05-b964-b86af1eb1339.png)
<br/>
<br/>

- ### **Keyword**
![midproject keyword api](https://user-images.githubusercontent.com/69191828/174037954-5bbe9d86-ec70-48d9-b55f-9350ac1e945c.png)
<br/>
<br/>

- ### **Area**
![midproject area api](https://user-images.githubusercontent.com/69191828/174038005-c7c261fe-2dfe-422f-82e7-32be3327e286.png)
<br/>
<br/>

- ### **Place(MainService)**
![midproject place api](https://user-images.githubusercontent.com/69191828/174038088-2a6b30bd-04b2-4361-bbca-6489724fed3a.png)

<br/>
<br/>

## **6. 트러블 슈팅**
#
- 양방향 매핑 설정하다가 오류떠서 단방향으로 바꿈
- user에서 키워드 외래키 null값 들어감
- kw_id값을 키워드 설정 내용에 따라 임의로 넣어주는데 
- 프론트에서 회원가입시 CORS 오류 발생 -> 백엔드에 CrossOrigin
- next.js에서 데이터 정보를 실제 이동하는 페이지와 다른 js파일로 넘겨주는 방법을 찾지 못함. 예제는 모두 Link 테그를 사용하여 이동하는 페이지에 정보를 넘겨주는 방식이었음.
- 데이터를 이동시키는 방법을 찾지 못한 이유로 뒤의 작업들이 진행되지 못함.

<br/>

## **7. 느낀점**
#


<br/>
<br/>

### [ 참고 사이트 ]
  



import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { postSignUpAPI } from '../../lib/api/signup';
import styles from './Signup.module.css'

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [gender, setGender] = useState('');
	const [phoneNum, setPhoneNum] = useState('');

	const router = useRouter();

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	  };

	  const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	  };

	  const nameChangeHandler = (event) => {
		setName(event.target.value);
	  };

	  const birthDateChangeHandler = (event) => {
		setBirthDate(event.target.value);
	  };

	  const genderChangeHandler = (event) => {
		setGender(event.target.value);
	  };

	  const phoneNumChangeHandler = (event) => {
		setPhoneNum(event.target.value);
	  };
	

	const signup = () => {
		const data = {
			email: email,
			password: password,
			name : name,
			birthDate: birthDate,
			gender: gender,
			phoneNum: phoneNum,
		}

		postSignUpAPI(data);

		router.replace('/');
	}

	
	return (
		
		<section className={styles[ "signup-wrap" ]} >
			<div>
				<h1 className={styles[ "h1" ]}>회원가입</h1>
			</div>
		
			<div >
				<h3 className={styles[ "h3" ]}>이메일</h3>
				<span className={styles["signup-span"]}>
					<input onChange={emailChangeHandler} className={styles["signup-input"]} id="signup-id" type="text" placeholder="이메일을 입력해주세요" value={email}></input>
				</span>

				<h3 className={styles[ "h3" ]}>비밀번호</h3>
				<span className={styles["signup-span"]}>
					<input onChange={passwordChangeHandler} value={password} className={styles["signup-input"]} id="signup-pw" type="text" placeholder="비밀번호를 입력해주세요"></input>
				</span>
			</div>

			<div>
				<h3 className={styles[ "h3" ]}>이름</h3>
				<span className={styles["signup-span"]}>
					<input onChange={nameChangeHandler} value={name} className={styles["signup-input"]} id="signup-name" type="text"></input>
				</span>

				<h3 className={styles[ "h3" ]}>생년월일</h3>
				<span>
					<span className={styles["signup-input-birth"]}>
						<input className={styles["signup-input-birth1"]} onChange={birthDateChangeHandler} value={birthDate} id="signup-birth-yy" type="text" placeholder="ex)2010-10-10"></input>
					</span>
				</span>

				<h3 className={styles[ "h3" ]}>성별</h3>
				<span className={styles["signup-span"]}>
					<select id="signup-gender" className={styles["selectbox" ]} name="gender" >
						<option value="gender">성별</option>
						<option value={gender} onChange={genderChangeHandler} >남자</option>
						<option value={gender} onChange={genderChangeHandler} >여자</option>
						<option value="no">선택 안함</option>
					</select>
				</span>
			</div>

			<div >
				<h3 className={styles[ "h3" ]}>휴대전화</h3>
				<div >
					<span className={styles["signup-span" ]} >
						<input className={styles["signup-input"]} id="signup-phone" type="text" value={phoneNum} onChange={phoneNumChangeHandler} placeholder="전화번호 입력"></input>
					</span>
				</div>
				
			</div>

			<div>
				<div className={styles["signup-btn-wrap"]}>
					<button className={styles["signup-btn"]} type="submit" onClick={signup} id="signup-btn">가입하기</button>
				</div>
			</div>
			
		</section>

	)
}

export default Signup
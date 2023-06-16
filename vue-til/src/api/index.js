import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';
//VUE_APP_ 접두사가 붙은 변수는 자동 로드 .env > api/index.js env.~~
//instance의 모듈화
function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

function createInstanceWithAuth(url) {
	const instance = axios.create({
		//baseURL: env.API_URL,
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
		// header: {
		// 	Authorization: store.state.token,
		// 	//인스턴스가 처음 생겼을 때, null 값으로 들어감
		// 	//인터셉터 이용해서 개선
		// },
	});

	return setInterceptors(instance);
}

export const instance = createInstance();

export const posts = createInstanceWithAuth('posts');

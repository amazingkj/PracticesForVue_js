//학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

//학습노트 데이터 조회
function fetchPosts() {
	return posts.get('/');
}

//특정 학습노트 조회하는 API
function fetchPost(postId) {
	return posts.get(postId);
}

//학습노트 데이터 생성
function createPost(postData) {
	return posts.post('/', postData);
}

//학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
	return posts.delete(postId);
}

//특정 학습 노트 수정
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };

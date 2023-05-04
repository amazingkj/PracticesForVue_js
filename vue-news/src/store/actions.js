
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'

export default {
 /*    //promise
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({ data }) => {//response.data
            console.log(data); 
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });
    }, 
    FETCH_ASK({ commit }){
        fetchAskList()
        .then(({ data }) => {//response.data
            console.log(data); 
            commit('SET_ASK', data);
        })
        .catch(error => {
            console.log(error);
        });
    }, 
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name) 
        .then(({ data }) => {//response.data
            console.log(data); 
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        });
    },*/
    FETCH_ITEM({ commit }, item) {
        fetchItemInfo(item) 
        .then(({ data }) => {//response.data
            console.log(data); 
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    // FETCH_LIST({ commit }, pageName) {
    //     fetchList(pageName) 
    //     .then(({ data }) => commit('SET_LIST', data))
    //     .catch(error =>  console.log(error));
    // }, 
    //async
    async FETCH_NEWS(context) {
       const response = await fetchNewsList();
       context.commit('SET_NEWS', response.data);
       return response;
       //결과값을 반환해야, 실행 순서를 보장할 수 잇다. 
    },
    async FETCH_JOBS({ commit }){
       try {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
       } catch (error) {
        console.log(error);        
       }
    },
    async FETCH_ASK({ commit }){
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList();
        commit('SET_LIST', response.data);
        return response;
    },
}
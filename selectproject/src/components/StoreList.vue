<template>
  <!-- <div>store list</div> -->  <div>
    <div v-for="restaurant in restaurants" v-bind:key="restaurant.id" > {{restaurant.name}}  </div>  
<!-- <h2>No. {{index + 1}}</h2> -->
   <!-- <dl>
      <dt>식당이름</dt></dt></dt>
      <dd>{{restaurant.rname}}</dd>
      <dt>이름</dt>
      <dd>{{restaurant.Distance}}</dd>
   </dl>
   </div>   -->
   </div> 
</template>

<script>

export default {
  data() {
    return {
      restaurants: []
    }
  },
   computed: {            	// computed는 계산 목적으로 사용된다고 보면 됨
    totalpage(){
      if(this.cnt == 0) {	// 현재 게시판 글 갯수가 0개일때 총 페이지가 0이 되는거 방지
        return 1;
      }else {
        return Math.ceil(this.cnt/10);    // (글 갯수/10)한 후 올림 연산을 통해 총 페이지 계산
      }
    }
   },
  mounted(){ //페이지 시작하면은 자동 함수 실행
		//this.restaurantList();
    this.$axios.post('http://localhost:3002/api/rlist',{boardnum: this.$route.params.id,
        page: this.$route.query.page} // back 서버에 현재 게시판번호와 페이지번호를 넘겨줘야 해당하는 글 리스트 불러올 수 있음
    
    .then(res=> this.restaurant = res.data)          
    .catch(error => console.log(error))
    this.$axios.post('http://localhost:3002/api/users/rlistcnt', {
      	// back 서버에 현재 게시판번호와 페이지번호를 넘겨줘야 해당하는 글 리스트 불러올 수 있음
        boardnum: this.$route.params.id
      })
    .then(res=> this.cnt = res.data)         
    .catch(error => console.log(error))
  }
}

  // },
  // methods: {
  //     restaurantList(){
  //       this.$axios.get('http://localhost:3002/api/rlist',{params:this.restaurants})
  //       .then(res=> this.restaurant = res.data)          
  //       .catch(error => console.log(error));
  //       console.log(req);
  //     }      
  // },


  // this.$axios({	// 게시글 작성자, 제목, 작성일 가져오기
  //     url: "http://localhost:3002/api/users/rlist",
  //     method: "POST",
  //     data: {
  //     	// back 서버에 현재 게시판번호와 페이지번호를 넘겨줘야 해당하는 글 리스트 불러올 수 있음
  //       boardnum: this.$route.params.id,
  //       page: this.$route.query.page,
  //     },
  //   })
  //   .then(res=> this.restaurant = res.data)          
  //   .catch(error => console.log(error));
  //    console.log(res);

  //    this.$axios({	// 게시글 작성자, 제목, 작성일 가져오기
  //     url: "http://localhost:3002/api/users/rlistcnt",
  //     method: "POST",
  //     data: {
  //     	// back 서버에 현재 게시판번호와 페이지번호를 넘겨줘야 해당하는 글 리스트 불러올 수 있음
  //       boardnum: this.$route.params.id
  //     },
  //   })
  //   .then(res=> this.cnt = res.data)          
  //   .catch(error => console.log(error));
  //    console.log(res);

	


       
// created() {
//   //this.$store.dispatch('FETCH_NEWS');
//   var vm = this;
//   restaurantList()
//   .then(function(response){
//     console.log(response);
//     vm.restaurant = response.data;
//   })
//   .catch(function(error){
//     console.log(error);
//   });
//   },


</script>

<style>

</style>
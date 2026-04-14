<template>
  <div>
    <h1>axios basic</h1>
    <h2>가입 안해도 되는 가짜 데이터(fake api) 제공 사이트</h2>
    <h3>https://jsonplaceholder.typicode.com</h3>
    <h3>https://fake-json-api.mock.beeceptor.com/users</h3>
    <h3>https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts</h3>

    <div style="display: flex; justify-content: center;">
      <div>
    <h3>old response</h3>
    <table>
      <tr v-for="raw in responseOldData" :key="raw.id">
        <td>{{ raw.id }}</td>
        <td>{{ raw.title }}</td>
      </tr>
    </table>
    </div>

    <div>
    <h3>new response</h3>
    <table>
      <tr v-for="raw in responseNewData" :key="raw.id">
        <td>{{ raw.id }}</td>
        <td>{{ raw.name }}</td>
      </tr>
    </table>
    </div>
    </div>
  </div>
</template>

<script setup>
// webpack과 import 충돌이 발생하기 때문에 commonJS 형태로 가져와서 사용하기
const axios = require('axios');
import { ref, onMounted } from 'vue';

const responseOldData = ref([])
const responseNewData = ref([])

    // 방법 1: .get().then() 중, then() 함수 내에서 데이터 처리하기
    // 기존 Promise 방식으로, then() 블록 내에서 모든 함수를 처리해야하는 특징이 있으나, 콜백 지옥 가능성이 있음
const initTableData_old = async () => {
 await axios.get('https://jsonplaceholder.typicode.com/todos/').then(
    response => {
     console.log('old response = ', response)
      responseOldData.value = response.data.slice(0, 10)
   }).catch((e) => {
    console.error(e)
   }) 
}

// 방법 2: 변수로 빼서 데이터 처리하기
   // ES8에서 도입된 현대적 방식으로 구조 분해 할당을 통해 처리하기 때문에 권장되는 스타일이지만 async와 반드시 함께 다녀야 하기 때문에, 자바스크립트 동기/비동기 처리에 따른 기본 지식 필요
const initTableData_new = async () => {
  try {
    // response의 구조 분해 할당을 통해 원하는 데이터를 바로 가져올 수 있다.
    /**
     * 기본적으로 보통의 api response는 아래와 같은 형태를 취한다. 구조 분해 할당이란, 아래 response 중, 원하는걸 뽑아서 데이터를 변수에 할당하는 방식이다.
     * 위 예제가 response.data로 데이터에 접근해야만 한다면, 구조분해 할당은 바로 data로 접근할 수 있다.
     * {
     *  config: {},
     *  data: [], 
     *  headers: ...,
     *  request: ...,
     *  status: 200,
     *  statusText: ''
     * }
     */
    // 구조 분해 할당할 때 사용하는 중괄호 {} 는 객체(Object{})의 의미가 아니라, 위 response의 기본 형태 중에서, key가 data(const {data} <- 여기의 data)인 데이터만 취해서 가져오라는 의미다.
    // 2개 이상으로 분해해서 가져올 땐, const { data, status } 이런식으로 가져오면 된다.
    // response의 키 값(data, status 등)을 그대로 사용하지 않고, 변수로 처리할 예정이라면 `const { data: tableData}` 이렇게 변수를 할당한다.
    // 만약 중괄호를 사용하지 않으면, 위의 예제처럼 response를 통째로 받는걸로 이해하고, 변수를 const data로 해도 response 전체가 할당된다. 주석 풀어서 콘솔을 통해 확인해보면 된다.
    const { data } = await axios.get('https://fake-json-api.mock.beeceptor.com/users')
    //  const checkHere = await axios.get('https://fake-json-api.mock.beeceptor.com/users')
    //  console.log('checkHere:::::: ', checkHere)
      
    console.log('new response = ', data)
    responseNewData.value = data

  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  initTableData_old()
  initTableData_new()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

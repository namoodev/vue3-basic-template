<template>
    <button @click="updateValue">change store value</button>
    <br />
    <input type="text" v-model="inputText">
    <div>store에 직접 접근해서 바로 값 state값 가져오기: {{ store.test }}</div>
    <div>state에 등록한 변수 값: {{ test }}</div>
    <div>getters에 등록한 변수 값: {{ getTestValue }}</div>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store/index';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const inputText = ref('')

// index.ts에 설정한 스토어 가져오기
const store = useTestStore()

// 반응성 유지를 위해 storeToRefs 사용하기 (state와 getters는 변수값이기 때문에 구조 분호 할당이 필요하다)
const { test, getTestValue } = storeToRefs(store)

// actions는 함수이므로 구조 분해 할당을 위한 선처리 필요없이, 바로 할당 가능 하다.
const { setValue } = store

const updateValue = () => {
    console.log('--input textvalue', inputText.value)
    setValue(inputText.value)
}

</script>
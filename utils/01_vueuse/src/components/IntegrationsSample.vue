<script setup>
// vueuse 중 add-on인 integrations를 사용했을 때 코드
import { useCookies } from '@vueuse/integrations/useCookies'
import { ref } from 'vue'

const cookies = useCookies(['locale'])

// vueuse 없이 바닐라 자바스크립트로 구현했을 때 코드

const vanillaCookies = ref('')

// 저장하기 (단순 문자열이 아닌 경우, 문자열 파싱이 필요함)
const setCookie = (value) => {
    document.cookie = 'locale=' + value + ';' + 'path=/; max-age=3600'
    // 쿠키는 기본적으로 쿠키에 담을 변수(locale)=값(value);과 경로(path);, 지속시간(max-age);을 등록해야 한다.
vanillaCookies.value = value
}
</script>

<template>
    <div> integration은 통합을 의미하며, 웹 개발시 거의 매번 사용하게 되는 필수 기능을 합쳐둔 애드온이다. 샘플은 <code>useCookies()</code> 함수를 사용하여 생성했다.</div>
    <div> 쿠키는 개발자모드(f12)를 열고, '저장 공간' 탭에서 '쿠키'를 누른 뒤 새로고침을 하면, 쿠키에 등록된 데이터를 확인할 수 있다.</div>
  <div style="height: 500px;">
    <strong>locale</strong>: {{ cookies.get('locale') }}
    <pre>{{ cookies.getAll() }}</pre>
    <button @click="cookies.set('locale', 'kr-KR')">
      한국어
    </button>
    <button @click="cookies.set('locale', 'en-US')">
      영어
    </button>
      <div style="margin: 20px 0 0 0">

        &nbsp;
       쿠키에 등록된 값 {{ vanillaCookies }}
       <input @click="setCookie('kr-KR')" type="radio" name="lang" id="kr"><label for="kr">KR</label>
   <input @click="setCookie('en-US')" type="radio" name="lang" id="en"><label for="en">EN</label>
  </div>
  </div>
</template>
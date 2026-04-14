# Hello World!

> 이 프로젝트는 vue에 입문하는 입문자들을 위한 샘플 및 가이드 프로젝트입니다. 하나의 프로젝트에 모든 가이드를 작성하는 것 보다, 개별 프로젝트로 생성하는 것이 보다 더 가독성이 있을 것 같아 개별 프로젝트로 진행합니다.

---

## 프로젝트 요약 설명

```plaintext
vue3-basic-template/
├── README.md                # 전체 학습 로드맵 및 요약
├── complete_basic           # basics 폴더 내 모든 라이브러리를 하나의 프로젝트로 생성
├── basics/                  # 기본 개념 및 도구 이해
│   ├── 01_init              # 프로젝트 초기화
│   ├── 02_vue-router        # vue-router (라우팅)
│   ├── 03_pinia             # pinia (데이터 중앙 처리)
│   ├── 04_axios             # axios (http 통신)
│   └── 05_composable        # vue3의 스크립트 모듈화 방법
├── utils/                   # vue와 함께 사용하면 좋은 유틸리티
│   ├── 01_vueuse            # vueuse (vue 개발자라면 필수로 사용하는 기본 유틸리티)
│   └── 02_veevalidate       # vee-validate (데이터 유효성 검사)
├── designs/                 # 디자인 프레임워크 및 컴포넌트 디자인 라이브러리
│   ├── 01_vuetify           # vuetify (널리 알려졌지만, 커스텀이 짜증남)
│   ├── 02_bootstrap         # bootstrap (사용 방법이 가장 단순하고 쉬움)
│   ├── 03_element           # element (중국인 개발자가 만들어서 번역해서 써야함)
│   └── 04_antdesignvue      # ant-design-vue (중국인 개발자가 만들어서 이 역시 번역필요)
└── ...                      # 이후 추가될 프로젝트들 (03, 04, 05, ...)
```

---

## 가이드 및 샘플 프로젝트 진행 과정에 따른 체크리스트

### 📦 기본 라이브러리 `basics/`

|                       주요 대상                        | 샘플 프로젝트 |    폴더명     | 상세 설명 포스팅 | 링크 |
| :----------------------------------------------------: | :-----------: | :-----------: | :--------------: | :--: |
| [vue-router](https://www.npmjs.com/package/vue-router) |      ✅       | 02_vue-router |                  |      |
|      [pinia](https://www.npmjs.com/package/pinia)      |      ✅       |   03_pinia    |                  |      |
|      [axios](https://www.npmjs.com/package/axios)      |      ✅       |   04_axios    |                  |      |
|                       composable                       |      ✅       | 05_composable |                  |      |
| [typescript](https://www.npmjs.com/package/typescript) |               |               |                  |      |

### 🎨 디자인 프레임워크 및 도구 `designs/`

|      주요 대상      | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :-----------------: | :-----------: | :----: | :--------------: | :--: |
|       quasar        |               |        |                  |      |
|       vuetify       |               |        |                  |      |
| bootstrap(랩퍼포함) |               |        |                  |      |
|   ant-design-vue    |               |        |                  |      |
|       element       |               |        |                  |      |
|      prime vue      |               |        |                  |      |

### 🛠️ 유틸리티 툴 `utils/`

|                      주요 대상                       | 샘플 프로젝트 |  폴더명   | 상세 설명 포스팅 | 링크 |
| :--------------------------------------------------: | :-----------: | :-------: | :--------------: | :--: |
| [VueUse](https://www.npmjs.com/package/@vueuse/core) |      ✅       | 01_vueuse |                  |      |
|               tanStackQuery(VueQuery)                |               |           |                  |      |
|                     veeValidate                      |               |           |                  |      |
|                        eslint                        |               |           |                  |      |
|                       prettier                       |               |           |                  |      |
|                        lodash                        |               |           |                  |      |
|                      jsencrypt                       |               |           |                  |      |
|                    vue-cilpboard3                    |               |           |                  |      |
|                        dayjs                         |               |           |                  |      |
|                       momentjs                       |               |           |                  |      |
|                       introjs                        |               |           |                  |      |
|                     vuedraggable                     |               |           |                  |      |
|                       vue-i18n                       |               |           |                  |      |
|                      vue-macros                      |               |           |                  |      |

### 📈 그래프 전용 `graphs/`

| 주요 대상  | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :--------: | :-----------: | :----: | :--------------: | :--: |
|  chartjs   |               |        |                  |      |
| apexcharts |               |        |                  |      |
|  echarts   |               |        |                  |      |

### 🗺️ GIS `gis/`

|  주요 대상   | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :----------: | :-----------: | :----: | :--------------: | :--: |
|   leaflet    |               |        |                  |      |
|  openlayer   |               |        |                  |      |
|     turf     |               |        |                  |      |
| Supercluster |               |        |                  |      |

### 🖌️ 시각화 라이브러리 `visualizations/`

|    주요 대상    | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :-------------: | :-----------: | :----: | :--------------: | :--: |
|       d3        |               |        |                  |      |
|  html-to-image  |               |        |                  |      |
|    vue-flow     |               |        |                  |      |
|  font awesome   |               |        |                  |      |
| lucide-vue-next |               |        |                  |      |

### 🌈 CSS `css/`

|  주요 대상   | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :----------: | :-----------: | :----: | :--------------: | :--: |
|     sass     |               |        |                  |      |
| tailwind CSS |               |        |                  |      |

### 👷 빌드 도구 `builds/`

|    주요 대상    | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :-------------: | :-----------: | :----: | :--------------: | :--: |
|      vite       |               |        |                  |      |
|     webpack     |               |        |                  |      |
| vite-plugin-pwa |               |        |                  |      |

### 🧮 프레임워크 `frameworks/`

| 주요 대상 | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :-------: | :-----------: | :----: | :--------------: | :--: |
|   nuxt    |               |        |                  |      |
| electron  |               |        |                  |      |

### 🧪 테스트 도구 `tests/`

| 주요 대상 | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :-------: | :-----------: | :----: | :--------------: | :--: |
|  vitest   |               |        |                  |      |
|    msw    |               |        |                  |      |

### ⏰ 실시간 통신용 도구 `realtime/`

| 주요 대상 | 샘플 프로젝트 | 폴더명 | 상세 설명 포스팅 | 링크 |
| :-------: | :-----------: | :----: | :--------------: | :--: |
| websocket |               |        |                  |      |

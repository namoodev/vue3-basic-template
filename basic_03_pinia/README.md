# 03_basic_pinia

## 사용한 라이브러리 및 플러그인

```bash
# 1. Pinia (데이터 중앙 처리)
yarn add pinia
# 또는
npm install pinia


# 2. pinia-persistedstate (스토어에 올라간 데이터가 새로고침 시 날아가는 현상을 방지하기 위해 추가하는 피니아 전용 플러그인)
yarn add pinia-plugin-persistedstate
# 또는
npm install pinia-plugin-persistedstate
```

### 관계도

```mermaid
graph TD
    %% 1. 컴포넌트 영역
    subgraph Vue_Component
        A[User Input: v-model] --> B{Button Click}
        B -->|Action 호출| C[updateValue 함수]
    end

    %% 2. Pinia 스토어 영역
    subgraph Pinia_Store
        C -->|setValue| D[Actions: setValue]
        D -->|Update| E[(State: test)]
        E -->|React| F[Getters: getTestValue]
    end

    %% 3. 데이터 반영
    F --> G[UI: getTestValue]
    E --> H[UI: test]
    E --> I[UI: store.test]

    %% 스타일 설정
    style E fill:#fff9c4,stroke:#fbc02d
    style D fill:#c8e6c9,stroke:#2e7d32
```

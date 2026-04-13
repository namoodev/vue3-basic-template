# 03_basic_pinia

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

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

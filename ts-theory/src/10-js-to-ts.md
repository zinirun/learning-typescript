## 자바스크립트 코드에 타입스크립트를 적용할 때 주의할 점

- 기능적 변경은 절대 하지 않을 것
- 테스트 커버리지가 낮을 땐 함부로 적용하지 않을 것
- 처음부터 타입을 엄격하게 적용하지 않을 것
  - 점진적으로 strict 레벨을 증가하기

## 타입스크립트 적용 절차

### 1. 타입스크립트 프로젝트 환경 구성
- `yarn add typescript --dev`
- `tsconfig.json` 생성 후 기본 값 추가
```json
{
    "compilerOptions": {
        "allowJs": true,
        "target": "ES5",
        "outDir": "./dist",
        "moduleResolution": "Node",
        "lib": ["ES2015", "DOM", "DOM.Iterable"]
},
    "include": ["./src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```
- 타입스크립트 파일로 변환
- 컴파일 명령어 `tsc`로 자바스크립트 파일로 변환


### 2. loose한 환경에서 프로젝트 돌려보기
- `js` 파일을 모두 `ts` 파일로 변경
- 컴파일 에러가 나는 것 위주로 에러가 안나게 수정
  - 기능을 사소하게라도 변경하지 않게 주의
- 테스트 코드가 성공하는지 확인

### 3. 명시적 `any` 선언
- 테스트코드가 통과하는지 확인
- 타입스크립트 설정파일에 `noImplicitAny: true`를 추가
- 타입을 적용할 수 있는 모든 곳에 타입을 적용
  - 라이브러리 쓰는 경우 `@types` 라이브러리 찾아 설치
  - 타입을 정하기 어려우면 명시적으로라도 `any` 선언
- 테스트코드 통과하는지 확인

### 4. `strict` 모드 설정
- `tsconfig.json`에 아래 설정 추가
```
{
  "strict": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true,
  "strictBindCallApply": true,
  "strictPropertyInitialization": true,
  "noImplicitThis": true,
  "alwaysStrict": true,
}
```
- `any` 타입을 최대한 적절한 타입으로 변환
- `as`와 같은 키워드를 최대한 사용하지 않게
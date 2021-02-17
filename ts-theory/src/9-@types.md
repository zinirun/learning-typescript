## @types 라이브러리
써드 파티 라이브러리(lodash, chart, moment 등)를 타입스크립트에서 사용하려면 각 기능에 대한 타입이 정의되어 있어야 한다.

이 경우 `@types`라는 라이브러리를 설치하면 된다.

```
npm i -D @types/lodash
```

대부분의 JS 라이브러리는 `@types`라는 별칭의 보조 라이브러리를 제공한다.

## #types의 내부 구조
```
└─ @types/jquery
   ├─ index.d.ts
   ├─ package.json
```

`package.json` 파일 안에 `type` 속성이 정의되어 있다.
## tsc 명령어

```
tsc app.ts
```

### 타입스크립트 설정 파일 인식 기준
tsc 명령어를 대상 파일을 지정하지 않고 실행하면 현재 폴더에 있는 타입스크립트 설정 파일을 기준으로 변환작업을 수행함. (현재 폴더에 tsconfig 파일이 없으면 상위 폴더로 검색해나감)

```
tsc -p 상대경로
tsc -p ./src
```

## tsconfig 속성
### files
변환 명령어를 입력할 때마다 대상 파일의 경로를 지정하지 않고 미리 정의할 수 있음
```
{
  "files": ["app.ts", "./utils/math.ts"]
}
```

### include
`files`와 같이 파일을 개별로 지정하지 않고 변환할 폴더를 지정할 수 있음
```
{
  "include": ["src/**/*"]
}
```
> 와일드카드 패턴
> *: 디렉터리 모든 파일
> ?: 디렉터리 내 파일 이름 중 한글자라도 맞으면
> **: 하위 디렉터리 재귀적으로 접근

### exclude
include와 반대, 변환하지 않을 폴더 경로
```
{
  "exclude": ["node_modules"]
}
```
- 그러나 node_modules 폴더의 @types 폴더는 컴파일에 포함함, 변경은 compilerOptions - typeRoots에서


### extends
특정 tsconfig를 불러와서 추가할 수 있는 속성
```
{
  "extends": "./config/base"
}
```

### target
자바스크립트로 변환되는 버전. es3, es5, es6, 가장 최신버전은 esnext
```
{
  "target": "esnext"
}
```

### lib
타입스크립트를 자바스크립트로 컴파일할 때 포함할 라이브러리의 목록. 예를 들어 `async` 코드를 컴파일 할 때 `Promise` 객체가 필요하므로 아래와 같은 설정을 해야함.

```
{
  "lib": ["es2015", "dom", "dom.iterable"]
}
```

### allowJs
컴파일할 때 자바스크립트 파일도 포함할지 설정. (점진적으로 타입스크립트를 적용할 때 사용하면 좋음)
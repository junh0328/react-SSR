- CRA(Create-react-app)로 만든 프로젝트에서는 웹팩 관련 설정이 기본적으로 무두 숨겨져 있으니 yarn eject 명령어를 실행하여 밖으로 꺼내야 합니다.

  ```
  yarn eject
  ```

## slice 함수

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(0,-1));
// expected output: Array ["ant", "bison", "camel", "duck"]

console.log(animals.slice(2,-1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

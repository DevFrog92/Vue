# 예제로 배우는 Vue.js

## Chapter01
Vue.js는 앵귤러의 양방향 데이터 바인딩과 리엑트의 가삼 DOM과 같은 기술을 집약한 유연하고 사용하기 쉬운 라이브러리이자 프레인워크다.

## Chapter02
- watch의 경우 동작 함수를 method로 분리해서 작성할 수 있다.
- `this.$destroy` 로 인스턴스를 파괴할 수 있다.

## Chapter03
- 사용자 정의 directive
- 표현식 형태의 바인딩은 data 프로퍼티에 직접 접근이 가능하다.
- event & event modifier
  - bubble
    - $event.stopPropagation()
  - capture
  - target

Chapter04
- Reusable component
- global & local component
- props & emit & event bus
  - `event.$emit`, `event.$on`, `event.$once(한번만 이벤트 버스를 구독한다.)`, `event.$off`
- slot
  - unnamed slot, named slot, scoped slot -> v-slot
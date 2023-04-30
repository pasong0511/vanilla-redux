# 리덕스 공부하기





## 🔨 기본 용어

* store: Data 를 담는 저장소 

* state: 변경되는 Data 



* 리덕스에는 state를 저장하는 함수가 있다.

  * store가 하는 일은 state data를 넣을 수 있는 장소를 생성한다.

  * store를 저장하는 함수 사용 방법

    ```
    //리듀서 함수 생성
    const reducer = () => {};
    
    //stote에 리듀서 함수 추가
    const store = createStore(reducer);
    ```

* reducer: data를 수정하는 함수

  * data를 바꾸고 책임지는 기능
  * reducer가 return 하는 값이 data state가 된다.



## 🔨 reducer 개념

```
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {
    return "hello";
};

const store = createStore(reducer);

console.log(store);

```



* store가 갖고있는 것은 함수를 갖고있다.
  * dispatch(), getState(), replaceReducer(), subscribe()

![1682842274538](E:\projects\[react]\리덕스\vanilla-redux\assets\1682842274538.png)



* score.getState() 를 이용하면 recuder 함수가 반환하는 state를 갖고올 수 있다.

```
const reducer = () => {
    return "hello";
};

const store = createStore(reducer);

console.log(store.getState());
```

![1682842462760](E:\projects\[react]\리덕스\vanilla-redux\assets\1682842462760.png)



* redux의 data는 기본적으로 한곳에만 있다.

  * reducer에서 만든 데이터!
  * reducer 함수에서 유일하게 data를 바꿀 수 있다.

* recuder 함수가 state 값을 수정하고, 반환한 값이 store의 data가 된다

  ```
  const reducer = (state = "기본값") => {
      return state;
  };
  
  const store = createStore(reducer);
  console.log(store.getState());
  
  ```


## 🔨 Action



* action : redux에서 function을 부를때 사용하는 두번째 파라미터

  * reducer와 소통하기 위한 방법
  * type이라는 객체를 갖고있다.
  * type 객체에 redux에서 지정한 기본 값이 들어가있다.

  ```
  const reducer = (state = "기본값", action) => {
      console.log(state, action);
      return state;
  };
  
  const store = createStore(reducer);
  ```

  ![1682843431511](E:\projects\[react]\리덕스\vanilla-redux\assets\1682843431511.png)



* action에 메시지를 전달하는 방법은 store.dispatch({type : }) 이용

  ```
  const reducer = (state = "기본값", action) => {
      console.log(state, action);
      return state;
  };
  
  const store = createStore(reducer);
  store.dispatch({ type: "헬로" });
  
  ```

  ![1682843746452](E:\projects\[react]\리덕스\vanilla-redux\assets\1682843746452.png)



* action으로 보낸 메시지로 reducer에서 받아 분기처리 할 수 있다.

  ```
  const reducer = (state = 0, action) => {
      console.log(state, action);
  
      if (action.type === "ADD") {
          console.log("더하래~~");
      }
  
      return state;
  };
  
  const store = createStore(reducer);
  store.dispatch({ type: "ADD" });
  
  ```

![1682844136565](E:\projects\[react]\리덕스\vanilla-redux\assets\1682844136565.png)



* reducer 함수가 return 하는 모든것은 data가 되기 때문에 return 하면 store에 저장되어있는 state를 변경할 수 있다.

  * 그리고 그것을 다시 .getState() 해서 가져올 수도 있다.

  ```
  const reducer = (state = 0, action) => {
      console.log(state, action);
  
      if (action.type === "ADD") {
          console.log("더하래~~");
          return state + 1;
      }
  
      return state;
  };
  
  const store = createStore(reducer);
  store.dispatch({ type: "ADD" });
  
  console.log(store.getState());
  ```

![1682844336159](E:\projects\[react]\리덕스\vanilla-redux\assets\1682844336159.png)



* 3번 ADD, 1번 MINUS 하는 경우 state 상태 변화

  ```
  
  const reducer = (state = 0, action) => {
      console.log(state, action);
  
      if (action.type === "ADD") {
          return state + 1;
      } else if (action.type === "MINUS") {
          return state - 1;
      }
  
      return state;
  };
  
  const store = createStore(reducer);
  store.dispatch({ type: "ADD" });
  store.dispatch({ type: "ADD" });
  store.dispatch({ type: "ADD" });
  
  console.log(store.getState());
  
  store.dispatch({ type: "MINUS" });
  
  console.log(store.getState());
  ```

![1682844534396](E:\projects\[react]\리덕스\vanilla-redux\assets\1682844534396.png)
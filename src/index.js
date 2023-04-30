import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
    console.log(state, action);

    switch (action.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);
const onChange = () => {
    console.log("변화하는 state", store.getState());
    number.innerText = store.getState();
};
//store를 구독하고있음
store.subscribe(onChange);

const handleMinus = () => {
    store.dispatch({ type: MINUS });
};

//바로 넘기기
add.addEventListener("click", () => store.dispatch({ type: ADD }));
//함수로 만들기
minus.addEventListener("click", handleMinus);

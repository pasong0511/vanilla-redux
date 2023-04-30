import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

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
const onChange = () => {
    console.log("변화하는 state", store.getState());
    number.innerText = store.getState();
};
//store를 구독하고있음
store.subscribe(onChange);

const handleMinus = () => {
    store.dispatch({ type: "MINUS" });
};

//바로 넘기기
add.addEventListener("click", () => store.dispatch({ type: "ADD" }));
//함수로 만들기
minus.addEventListener("click", handleMinus);

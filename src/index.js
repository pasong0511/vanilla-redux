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
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });

console.log(store.getState());

store.dispatch({ type: "MINUS" });

console.log(store.getState());

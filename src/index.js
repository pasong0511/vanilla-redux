import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

//Action
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//action 메시지 빼기(중복 줄이기)
const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text,
    };
};

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

//Reducer
const reducer = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TODO:
            //앞에 두면, 맨 앞에 생김
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== parseInt(action.id));
        default:
            return state;
    }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
    store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
    const toDos = store.getState();

    ul.innerHTML = "";

    toDos.forEach((toDo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");

        btn.innerText = "삭제";
        btn.addEventListener("click", dispatchDeleteTodo);

        li.id = toDo.id;
        li.innerText = toDo.text;

        li.appendChild(btn);
        ul.appendChild(li);
    });
};

//삭제를 위해서 다시 그려줘야한다.
store.subscribe(paintTodos);

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);

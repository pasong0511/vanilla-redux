import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
    return {
        type: ADD,
        text,
    };
};

const deleteDoto = (id) => {
    return {
        type: DELETE,
        id,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((toDo) => toDo !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteDoto,
};

export default store;

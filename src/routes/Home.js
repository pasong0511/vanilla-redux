import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

function Home({ toDos, addTodo }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    console.log(state, ownProps);

    //여기에 return 해서 넣어주면 HOME props의 프로퍼티로 넘어감
    return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return { addTodo: (text) => dispatch(actionCreators.addTodo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { useState } from "react";
import { connect } from "react-redux";

function Home(props) {
    console.log("HOME 컴포넌트의 props", props.toDos);

    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    console.log(state, ownProps);

    //여기에 return 해서 넣어주면 HOME props의 프로퍼티로 넘어감
    return { toDos: state };
}

export default connect(mapStateToProps)(Home);

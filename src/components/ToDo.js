import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../routes/store";

function ToDo({ text, onBtnClick }) {
    return (
        <li>
            {text}
            <button onClick={onBtnClick}>삭제</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log("온프롭", ownProps);
    console.log("온프롭", ownProps.id);

    return {
        //여기서 함수를 정의하는 것이다.
        //onBtnClick 얘가 함수이름이고, 이를 디스패치를 실행시키고, ToDo 컴포넌트에 전달한다.
        onBtnClick: () => dispatch(actionCreators.deleteToto(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);

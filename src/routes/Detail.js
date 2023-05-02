import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail(props) {
    // const id = useParams();

    // console.log(id);

    console.log("디테일", props.toDo);

    return (
        <>
            <h1>디테일</h1>
            <h5>
                <b>{props.toDo?.id} : </b>
                <span>{props.toDo?.text}</span>
            </h5>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id },
        },
    } = ownProps;

    console.log(id);

    return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);

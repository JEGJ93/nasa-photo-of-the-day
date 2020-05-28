import React from "react";
import Comment from "./Comment";


const Description = props => {
    return (
        <div>
            <img src = {props.detail.hdurl}></img>
            <p>{props.detail.explanation}</p>
            <Comment 
            img = {props.detail.hdurl}
            date = {props.detail.date}/>
        </div>
    );
}

export default Description;
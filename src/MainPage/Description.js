import React from "react";
import Comment from "./Comment";
import styled from 'styled-components';


const TheDescription = styled.div`
font-family: cursive;
color: purple;
font-size: 30px;

`


const Description = props => {
    return (
        <div>
            <img src = {props.detail.hdurl}></img>
            <TheDescription>
            <p>{props.detail.explanation}</p>
            </TheDescription>
            <Comment 
            img = {props.detail.hdurl}
            date = {props.detail.date}/>
        </div>
    );
}

export default Description;
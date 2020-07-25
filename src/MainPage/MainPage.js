import React, { useEffect, useState } from "react";
import Description from "./Description";
import axios from 'axios';



const MainPage = () => {

const [page, setPage] = useState([]);
    useEffect(()  => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=fAHLPIC9MFYG5BO8cammLC0jmsD2JDhn2YckCHSt")
        .then(response => {
         
         console.log('response', response)
         setPage(response.data)
        })
        .catch(error => console.log("Error!", error));
    }, []);

    return (
        <div className= "App-header">
            <h1>{page.title}</h1>
            <Description detail = {page}/>
        </div>
    );
}




export default MainPage;
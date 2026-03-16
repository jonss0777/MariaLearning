

import React, { useState, useRef } from 'react';
import './Flashcard.css';
import { useParams } from 'react-router-dom';
//import appleImage from "./assets/apples.png";

const Flashcard = () => {
    const [data, setData] = useState([{ word: "apple", definition: "mazana" }, { word: "pear", definition: "pera" }, { word: "grapes", definition: "huvas" }, { word: "cherries", definition: "guindas" }, { word: "peach", definition: "durasno" }]);
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const item = useParams();
    const inputRef = useRef(null);
    const [edge, setEdge] = useState("")
   

    const [guess, setGuess] = useState("");
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const goLeft = (index) => {
        if (index == 0){
            setEdge("begin")
            return
        }
        setEdge("")   
        setIndex(() => index-1);
        setGuess("")
        setIsFlipped(false);
        if (inputRef.current) {
        inputRef.current.value = ""; }
    }

    const goRight = (index) => {
        if (index == data.length-1){
            setEdge("end")
            return
        }

        setEdge("")
        setIndex(() => index+1);
        setGuess("")
        setIsFlipped(false);
        if (inputRef.current) {
        inputRef.current.value = ""; } 
    
    }

    const randomIndex = () => {
        setIndex(() => Math.floor(Math.random() * data.length));
        setGuess("")
        setIsFlipped(false);
        
    }

    const checkOnSubmit = (event, answer) => {
        event.preventDefault();
        
        if(inputRef.current.value === answer){
            setGuess("correct")
        }
        else{
            setGuess("incorrect");
        }
        // console.log(`${inputRef.current.value} | ${answer}`);
        // const result = () => { return guess}
        // console.log(result())

        
    
    }


return (
    <>
        <div className="content">
            <h1>{item.title}</h1>
            
            <p>{item.description}</p>
            <p>Number of cards: {data.length}</p>
            <div className="carousel">
                <div className="carousel__track-container" >
                    <ul className="carousel__track" style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
                        {/* {data.map((item) => ( */}
                        <li key={index} className={`card-container`} onClick={handleClick}>
                            <div className={`card-flipper ${isFlipped ? 'flipped' : ''}`} >
                                <div className={`card-front ${edge}`}>
                                    <p>{data[index].word}</p>
                                </div>
                                <div className={`card-back ${edge}`}>
                                    <p>{data[index].definition}</p>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <form onSubmit={(event) => checkOnSubmit(event, data[index].definition)}>
                    <label>Guess the input here:</label>
                    <input 
                        className = {`${guess}`}
                        type="text"
                        ref={inputRef}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={randomIndex}>Shuffle</button>
                <div className="navigate_carousel">
                    <button className="carousel__button carousel__button--left" onClick={() => goLeft(index)} >←</button>

                    <button className="carousel__button carousel__button--right" onClick={() => goRight(index)}>→</button>
                </div>
            </div>



        </div>
    </>
);
};

export default Flashcard;
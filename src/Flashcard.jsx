// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export default function Flashcard() {
//     const params = useParams(true);
//     const [flip, setFlip] = useState();
//     // Load flash card information using id
//     const handleFlip = () => {
//         setFlip(!flip)
//     }
//     return (
//         <div className="content"><h1>{params.title}</h1>

//             <div className="flip-card">
//                 <div className="flip-card-inner" onClick={handleFlip}>
//                     {flip ?
//                         <div className="flip-card-front">
//                             <p>some text</p>

//                         </div>
//                         :
//                         <div className="flip-card-back">
//                             <p>definition</p>
//                         </div>
//                     }
//                 </div>

//             </div>

//             {/* <button onClick={handleFlip}></button> */}

//             {/* {params.id} */}
//         </div>


//     );
// }

import React, { use, useState } from 'react';
import './Flashcard.css';
import { useParams } from 'react-router-dom';
import appleImage from "./assets/apples.png";

const Flashcard = () => {
    const [data, setData] = useState([{ word: "apple", definition: "mazana" }, { word: "pear", definition:"pera"}, { word: "grapes", definition: "huvas" }, { word: "cherries", definition:"guindas"  }, {word:"peach", definition:"durasno"}]);
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const item = useParams();
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const goLeft = (index) => {
        if (index == 0)
            return

        setIndex(() => (index - 1));
    }

    const goRight = (index) => {
        if (index == data.length - 1)
            return;
        setIndex(() => (index + 1));
    }

    return (
        <>
            <div className="content">
                <h1>{item.title}</h1>
                {/* <div className="card-container" onClick={handleClick}>
                    <div className={`card-flipper ${isFlipped ? 'flipped' : ''}`}>
                        <div className="card-front">
                            <p>Front Side (Click Me)</p>
                        </div>
                        <div className="card-back">
                            <p>Back Side (Click Me to return)</p>
                        </div>
                    </div>
                </div> */}


                <div className="carousel">
                    <div className="carousel__track-container" >
                        <ul className="carousel__track" style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
                            {/* {data.map((item) => ( */}
                                <li className="card-container" onClick={handleClick}>
                                    <div className={`card-flipper ${isFlipped ? 'flipped' : ''}`}>
                                        <div className="card-front">
                                            <p>{data[index].word}</p>
                                        </div>
                                        <div className="card-back">
                                            <p>{data[index].definition}</p>
                                        </div>
                                    </div>
                                </li>
                            {/* ))} */}

                            {/* <li className="card-container" onClick={handleClick}>
                                <div className={`card-flipper ${isFlipped ? 'flipped' : ''}`}>
                                    <div className="card-front">
                                        <p>Front Side (Click Me)</p>
                                    </div>
                                    <div className="card-back">
                                        <p>Back Side (Click Me to return)</p>
                                    </div>
                                </div>
                            </li>
                            <li className="card-container" onClick={handleClick}>
                                <div className={`card-flipper ${isFlipped ? 'flipped' : ''}`}>
                                    <div className="card-front">
                                        <p>Front Side (Click Me)</p>
                                    </div>
                                    <div className="card-back">
                                        <p>Back Side (Click Me to return)</p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="navigate_carousel">
                        <button className="carousel__button carousel__button--left" onClick={() => goLeft(index)} >←</button>
                        {/* <div className="carousel__nav">
                            <button className="carousel__indicator" ></button>
                            <button className="carousel__indicator" ></button>
                            <button className="carousel__indicator" ></button>
                        </div> */}
                        <button className="carousel__button carousel__button--right" onClick={() => goRight(index)}>→</button>
                    </div>
                </div>



            </div>
        </>
    );
};

export default Flashcard;
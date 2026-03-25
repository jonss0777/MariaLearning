import { Link } from "react-router-dom";

import appleImage from "../assets/apples.png";
import furnitureImage from "../assets/furniture.jpg";
import candyImage from "../assets/candy.jpeg";
import shareIcon from '../assets/shareIcon24.svg';
import "./Collections.css";

// import reactLogo from './assets/react.svg'

export default function Flashcards() {

    //  This is to be replaced by a useEffect()
    const data = [{
        id: "23",
        title: "Fruits",
        image: appleImage,
        imageAlt: "Image of an fruit",
        description: "Learn what different ..."
    },
    {
        id: "24",
        title: "Candys",
        image: candyImage,
        imageAlt: "Image of an candy",
        description: "Learn what different ..."
    },
    {
        id: "25",
        title: "Furniture",
        image: furnitureImage,
        imageAlt: "Image of an furniture",
        description: "Learn what different ..."
    }]

    return (
        <>
            <h1 style={{ textAlign: "center" }}>My Collection</h1>
            {/* <div style={{ padding: "0px", margin: "0px" }}> */}
            <ol style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyle: "none", margin: "10px", padding: "15px", justifyContent: "center" }}>
                {data.map((item) => (
                    <li className="collection-card card">
                        <div style={{ padding: "4px 4px 4px 4px", margin: "4px 4px 4px 4px" }}>
                            <h2 style={{ textAlign: "center" }}>{item.title}</h2>
                            <div>
                                {/* <p>{item.image}</p> */}
                                <img alt={item.imageAlt} src={item.image} width={"200px"} height={"200px"}>
                                </img>
                            </div>
                            <div>
                                <p>{item.description}.</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Link className="collection-go-to-button" to={`/collection/${item.id}/${item.title}`}>Open</Link>
                                    <div style={{alignContent:"center"}} onClick={() => { console.log("Generate code") }}>
                                        <img src={shareIcon} alt="Your SVG" />
                                    </div >
                                </div>
                            </div>
                        </div>
                    </li>
                ))}


            </ol>
            {/* </div> */}
            <div id="create-new-flashcard-button">
                {/* <button>Create new flashcards</button> */}
                <Link id="" to="/create-flashcard" >Create new flash cards</Link>
            </div>


        </>
    )
}
import { Link } from "react-router-dom";

import appleImage from "../assets/apples.png";
import furnitureImage from "../assets/furniture.jpg";
import candyImage from "../assets/candy.jpeg";
import shareIcon from '../assets/shareIcon24.svg';

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
        <div className="content">
            <h1 style={{textAlign:"center"}}>My Collection</h1>
            <div style={{ padding: "0px", margin: "0px" }}>
                <ol style={{ display:"flex", flexDirection: "row", flexWrap: "wrap", listStyle: "none", margin: "10px", padding: "15px", justifyContent:"center" }}>
                    {data.map((item) => (
                        <li className="card">
                            <div style={{ padding: "4px 4px 4px 4px", margin: "4px 4px 4px 4px" }}>
                                <h2 style={{textAlign:"center"}}>{item.title}</h2>
                                <div>
                                    {/* <p>{item.image}</p> */}
                                    <img alt={item.imageAlt} src={item.image} width={"200px"} height={"200px"}>
                                    </img>
                                </div>
                                <div>
                                    <p>{item.description}.</p>
                                    <div style={{display:"flex", justifyContent: "space-between"}}>
                                    <Link className="button-link" to={`/collection/${item.id}/${item.title}`}>Go to</Link>
                                    <div onClick={() => {console.log("Generate code")}}>
                                        <img src={shareIcon} alt="Your SVG" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}


                </ol>
            </div>
            <div style={{margin: "0px 0px 50px 0px", padding: "0px 0px 0px 0px"}}>
                {/* <button>Create new flashcards</button> */}
                <Link id="button-create-new-flashcard" to="/create-flashcard" >Create new flash cards</Link>
            </div>


        </div>
    )
}
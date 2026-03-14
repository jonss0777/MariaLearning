import { Link } from "react-router-dom";


export default function Home() {

    return (
    
            <div className='content'>
                <h1 style={{}}>Maria</h1>
                <p style={{ fontStyle: "italics", textAlign: "center", margin: "0px", padding: "0px" }}>Learning is for everyone</p>

                <div style={{ padding: "0px", margin: "0px" }}>
                    <ol style={{ listStyle: "circle", margin: "10px", padding: "15px", textAlign: "left" }}>
                        <li><p >Create your own flash cards.</p></li>
                        <li><p >Share your flashcards with others.</p></li>
                        <li><p >Explore the public pre-made flashcard shop to find interesting flashcards.</p></li>

                    </ol>
                </div>

            </div>



    );
}
import { Link } from "react-router-dom";


export default function Home() {

    return (
        <>
            <nav style={{ display: "flex", justifyContent: "center", padding: "10px", margin: "0px" }}>
                <div style={{ display: "flex", width: "70%", justifyContent: "flex-end" }}>
                    <div
                        style={{ padding: "10px 15px 10px 15px", margin: "0px 20px 0px 0px", backgroundColor: "blue", borderRadius: "60px" }}
                        onClick={() => { "redirect to login" }}
                    >
                        <Link style={{ color: "white", padding: "6px 7px 6px 7px", margin: "0px" }} to="/register">Sign Up</Link>

                    </div>
                    <div style={{ padding: "10px 15px 10px 15px", margin: "0px 20px 0px 0px", backgroundColor: "blue", borderRadius: "60px" }}>
                        <Link style={{ color: "white", padding: "6px 7px 6px 7px", margin: "0px" }} to="/login">Login</Link>

                    </div>
                </div>
            </nav>
            <div className='content'>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column" }}>
                    <h1 style={{ textAlign: "center" }}>Maria</h1>
                    <p style={{ fontStyle: "italics", textAlign: "center", margin: "0px", padding: "0px" }}>Learning is for everyone</p>

                    <div style={{ padding: "0px", margin: "0px" }}>
                        <ol style={{ listStyle: "circle", margin: "10px", padding: "15px", textAlign: "left" }}>
                            <li><p >Create your own flash cards.</p></li>
                            <li><p >Share your flashcards with others.</p></li>
                            <li><p >Explore the public pre-made flashcard shop to find interesting flashcards.</p></li>
                        </ol>
                    </div>

                    <div>
                        <p># of flashcards created</p>
                        <p># of users</p>
                        <p># of categories</p>
                    </div>
                </div>
            </div>
        </>
    );
}
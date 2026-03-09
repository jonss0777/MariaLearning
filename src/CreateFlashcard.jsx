import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateFlashcard(props) {
    const [flashcardData, setFlashcardData] = useState([{ key: "apple", word: "apple", edit: false, definition: "manzana" }, { key: "book", word: "book", definition: "libro", edit: false }]);
    const listOfExistingFlashcardCollections = props.flashcardCollections;
    // const saveLocally = (e) => {

    //     e.preventDefault();
    //     // Save to data.txt
    //     // Save to use state
    //     console.log("Saved data locally")
    // }

    const addFlashcard = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData.entries());

        setFlashcardData((prevState) => [...prevState, { ...dataObject, key: dataObject.collection_name, edit: false }])
        console.log(dataObject);
    }

    const editFlashcard = (index) => {

        console.log(`Edit card with index: ${index}`);
        setFlashcardData((prevState) => prevState.map((item, i) =>
            i === index ? { ...item, edit: true } : item
        ))

    }

    const saveFlashcardEdit = (event,index) => {
        console.log(`Saving updates to card with index${index}`);
        console.log("Saving....");
        console.log("EVENT:");
        console.log(event);
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData.entries());

        setFlashcardData((prevState) => prevState.map((item, i) =>
            i === index ? { ... dataObject,  edit: false } : item))

    }

    const cancelFlashcardEdit = (index) => {
        console.log(`Cancel edits for card with index ${index}`)
        setFlashcardData((prevState) => prevState.map((item, i) =>
            i === index ? { ...item, edit: false } : item))
    }

    const removeFlashcard = (indexToRemove) => {
        console.log(`Cance card with index  ${indexToRemove}`)
        setFlashcardData((prev) =>
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleSave = () => {
        console.log("sending flashcards information to backend server.")
        console.log("redirect to flashcard")
    }

    return (
        <div className="content">
            <h1>New set</h1>
            <div id="input-container">

                <form onSubmit={addFlashcard} >
                    <div id="form-input">
                        <div className="form-input-item">
                            <label >Collection Name</label><br />
                            <input type="text" id="collection_name" name="collection_name" placeholder="..." required />

                        </div>

                        <div className="form-input-item">
                            <label >Word</label><br />
                            {/* <input type="text" id="word" name="word" placeholder="..." required /> */}
                            <textarea name="word" rows="4" cols="30" required placeholder="...">

                            </textarea>

                        </div>

                        <div className="form-input-item">
                            <label >Definition</label><br />
                            {/* <input type="text" id="definition" name="definition" placeholder="..." required /> */}
                            <textarea name="definition" rows="4" cols="30" required>

                            </textarea>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <input className="button-add" type="submit" value="Add" />
                        </div>

                    </div>
                </form>
            </div>

            <div id="flash-cards-container">

                <h2 style={{ textAlign: "center" }}>Flashcards</h2>
                <ol id="flash-card-list">
                    {flashcardData.map((item, index) => (
                        // A unique "key" prop is required for each element in the list
                        <li className="card" style={{ minWidth: "320px", padding: "10px 30px 0px 30px" }} key={index}>
                            {!item.edit ?
                                <div className="flash-card" style={{ width: "100%" }}>

                                    <div style={{ width: "100%" }}>
                                        <h3 >Word: {item.word}</h3>
                                        <p >Definition: {item.definition}</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", padding: "0px 0px 0px 20px" }}>
                                        <button className="button-edit" onClick={() => editFlashcard(index)}>Edit</button>

                                        <button className="button-remove" onClick={() => removeFlashcard(index)}>Remove</button>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className="flash-card-edit">
                                        <form onSubmit={(event) => saveFlashcardEdit(event,index)}>
                                            <div>
                                                <label>Word</label>
                                                <textarea name="word" rows="2" cols="30" placeholder={item.word} required ></textarea>
                                            </div>
                                            <div>
                                                <label>Title</label>
                                                <textarea name="definition" rows="2" cols="30" placeholder={item.definition} required></textarea>
                                            </div>

                                            <div style={{ display: "flex", justifyContent: "center", columnGap: "10px" }}>
                                                <button className="button-remove" onClick={() => cancelFlashcardEdit(index)}>Cancel</button>
                                                <input className="button-add" type="submit" value="Save" />

                                                {/* <button className="button-add" onClick={() => saveFlashcardEdit(index)}>Done </button> */}
                                            </div>
                                        </form>
                                    </div>
                                </>
                            }
                        </li>
                    ))}
                </ol>
                <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "20px", margin: "0px 0px 80px 0px" }}>
                    <button className="button-save" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div >
        // </div >
    )

}
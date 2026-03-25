import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './CreateFlashCard.css';

export default function CreateFlashcard(props) {
    const [flashcardData, setFlashcardData] = useState([{ key: "apple", word: "apple", edit: false, definition: "manzana" }, { key: "book", word: "book", definition: "libro", edit: false }]);
    const cardInfo = props.cardInfo;

    // fetch card date using cardInfo
    const navigate = useNavigate();

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

    const saveFlashcardEdit = (event, index) => {
        console.log(`Saving updates to card with index${index}`);
        console.log("Saving....");
        console.log("EVENT:");
        console.log(event);
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData.entries());

        setFlashcardData((prevState) => prevState.map((item, i) =>
            i === index ? { ...dataObject, edit: false } : item))

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

    const handleCreate = () => {
        console.log("sending flashcards information to backend server.")
        console.log("redirect to flashcard")
        navigate("/collection");
    }

    return (
        <>
            <h1>New</h1>
            <div id="create-flashcard-container">

                <div id="create-flashcard-input-container">

                    <form style={{ display: "flex", flexDirection: "column", margin: 0, padding: 0 }} onSubmit={addFlashcard} >

                        <div className="create-flashcard-elem">
                            <label >Collection Name</label><br />
                            <input id="create-new-form-text-area-input" type="text" name="collection_name" placeholder="..." required />

                        </div>

                        <div className="create-flashcard-elem">
                            <label >Word</label><br />
                            <textarea className="create-new-form-text-area" name="word" required placeholder="...">
                            </textarea>
                        </div>

                        <div className="create-flashcard-elem">
                            <label >Definition</label><br />
                            <textarea className="create-new-form-text-area" name="definition" required placeholder="...">

                            </textarea>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                            <input className="button-add" type="submit" value="Add" />
                        </div>


                    </form>
                </div>

                <div id="create-flashcard-item-list-container">

                    {/* <h2 style={{ textAlign: "center" }}>Flashcards</h2> */}
                    <ol id="create-flashcard-item-list">
                        {flashcardData.map((item, index) => (
                            // A unique "key" prop is required for each element in the list
                            <li className="create-new-flashcard-list-item"key={index}>
                                {!item.edit ?
                                    <div className="create-new-flashcard-list-item-card card">

                                        <div >
                                            <h3>{item.word}</h3>
                                            <p>{item.definition}</p>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", padding: "0px 0px 0px 20px" }}>
                                            <button className="button-edit" onClick={() => editFlashcard(index)}>Edit</button>
                                            <button className="button-remove" onClick={() => removeFlashcard(index)}>Remove</button>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div className="flash-card-edit">
                                            <form onSubmit={(event) => saveFlashcardEdit(event, index)}>
                                                <div style={{ display: "flex", rowGap: "10px" }}>
                                                    <label style={{ padding: "0px 10px 0px 10px", margin: "0px 0px", alignContent: "center" }}>Word</label>
                                                    <textarea style={{ padding: "0", margin: "10px 0px" }} name="word" rows="2" cols="30" defaultValue={item.word} required ></textarea>
                                                </div>
                                                <div style={{ display: "flex", rowGap: "10px" }}>
                                                    <label style={{ padding: "0px 10px 0px 10px", margin: "0px 0px", alignContent: "center" }}>Title</label>
                                                    <textarea style={{ padding: "0", margin: "10px 0px" }} name="definition" rows="2" cols="30" defaultValue={item.definition} required></textarea>
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
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <button className="button-create" onClick={handleCreate}>Create</button>
                    </div>
                </div>
            </div>
        </>

    )

}
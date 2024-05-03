import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function FormText(props) {
    const [text, setText] = useState("");
    const [vowelCount, setVowelCount] = useState(0);

    const clickUpFunc = () => {
        let newText = text.toUpperCase();       
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success ")
    }
    
    const clickLoFunc = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success ")
    }
    
    const countVowels = () => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === 'A' || text[i] === 'E' || text[i] === 'I' || text[i] === 'O' || text[i] === 'U' ||
            text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
                count++;
            }
        }
        setVowelCount(count);
        props.showAlert("Vowels Counted!", "success ")
    }
    
    const clearText = ()=>{
        setText("");
        setVowelCount(0);
        props.showAlert("Text Cleared!", "success ")
        
    }
    
    const changeFunc = (event) => {
        setText(event.target.value)
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success ")
    }
    
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="5" style={{color: props.mode === 'dark'? 'white' : 'black', backgroundColor: props.mode === 'light'? 'white' : '#042743'}} onChange={changeFunc}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={clickUpFunc}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={clickLoFunc}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={countVowels}>Count Vowels</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Text Summary</h2>
            <p><b>{text===""? '0' : text.split(" ").length}</b> words and <b>{text.length}</b> characters.</p>
            <p><b>{text===""? '0' : 0.008 * text.split(" ").length}</b> Minutes to read.</p>
            <h2>Vowels Count</h2>
            <p>{vowelCount}</p>
            <h2>Preview</h2>
            <p>{text===""? 'Write something in the above box to display here' : text}</p>
        </div>
        </>
    )
}

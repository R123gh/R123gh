import React, { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState(''); // Initialize state with an empty string

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success"); // Call showAlert with message and type
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success"); // Call showAlert with message and type
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className='container'>
            <h1 style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-3 my-1' onClick={handleLoClick}>Convert to lowercase</button>

            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => element !== "").length} words and {text.length} characters</p>
               
                <p>{Math.ceil(text.split(" ").filter((element) => element !== "").length * 0.008)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </div>
    );
}



import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("ENTER YOUR TEXT HERE");

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleUpCase = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoCase = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // const handleCopy = () => {
  //   let newText = document.getElementById("myBox");
  //   newText.select();
  //   navigator.clipboard.writeText(newText.value);
  // };

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <div className="container">
          <button className="btn btn-primary" onClick={handleUpCase}>
            Convert to Uppercase
          </button>
        </div>
        <div className="container my-1">
          <button className="btn btn-primary" onClick={handleLoCase}>
            Convert to Lowercase
          </button>
          {/* <button className="btn btn-primary" onClick={handleCopy}>
            copy
          </button> */}
        </div>
      </div>

      <div className="container my-3">
        <h3>Your text Summary</h3>
        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

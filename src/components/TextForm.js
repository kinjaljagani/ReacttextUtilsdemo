import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");
  const handleUpClick = () => {
    console.log("Upper Case Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upprcase Done", "success");
  };
  const handleLoClick = () => {
    console.log("Lower Case Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase Done", "success");
  };
  const handleClearClick = () => {
    console.log("Clear text Clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleExtrapace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        // style={{
        //   color: props.mode === `light` ? `black` : `white`,
        // }}
      >
        <form>
          <h1>{props.heading}</h1>
          <div className="form-group mb-3">
            <textarea
              className="form-control"
              onChange={handleOnChange}
              // style={{
              //   backgroundColor: props.mode === `light` ? `white` : `grey`,
              //   color: props.mode === `light` ? `black` : `white`,
              // }}
              value={text}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn border-white mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn border-white mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert To Lowercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn border-white mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn border-white mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn border-white mx-1 my-1"
            onClick={handleExtrapace}
          >
            remove extra space
          </button>
        </form>
      </div>
      <div
        className="container my-3"
        // style={{
        //   color: props.mode === `light` ? `black` : `white`,
        // }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          take time to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

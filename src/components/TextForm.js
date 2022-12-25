import React, { useState } from "react";
// import { isHtmlElement } from "react-router-dom/dist/dom";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [buttonCheck, setButtonCheck] = useState("");
  // useEffect(() => {
  //   async function fetchData() {
  //     const data1 = await fetch(
  //       `https://jsonplaceholder.typicode.com/${buttonCheck}`,
  //       {
  //         method: "POST",
  //         header: {
  //           "content-type": "Application/json",
  //         },
  //       }
  //     );
  //     const response = await data1.json();
  //     setItem(response);
  //     console.log(response);
  //   }
  //   fetchData();
  // }, [buttonCheck]);

  let tempVar = (text.split(" ").length * 0.008).toFixed(0);
  if (tempVar < 1) {
    tempVar = "Less than 1 minute Read.";
  } else if (tempVar === "1") {
    tempVar = `${tempVar} Minute Read`;
  } else {
    console.log(tempVar + "else");
    tempVar = `${tempVar} Minutes Read`;
  }
  const copyText = () => {
    const textArea = document.getElementById("my-box");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
    // setButtonCheck("posts");
  };
  const handleUpClick = () => {
    console.log("UpperCase" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setButtonCheck("users");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // setButtonCheck("comments");
  };
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  };
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const clearAllText = (event) => {
    setText("");
  };
  console.log("rendered");
  return (
    <>
      <div
        className={`container ${
          props.mode === "primary" ? "text-dark" : "text-light bg-dark"
        }`}
      >
        <h3>{props.heading}</h3>
        <div
          className={`mb-3 my-3 ${
            props.mode === "primary" ? "text-dark" : "text-light bg-dark"
          }`}
        >
          <textarea
            className="form-control"
            id="my-box"
            value={text}
            onChange={handleOnChange}
            rows="4"
            style={{ color: active ? "red" : "green" }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1 hey"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  my-1 mx-1"
          onClick={clearAllText}
        >
          Clear all
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1 hey"
          onClick={handleDownClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className={
            active ? "btn mx-1 btn-success  my-1" : "btn mx-1 my-1 btn-danger"
          }
          onClick={handleClick}
        >
          Change color
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  my-1 mx-1"
          onClick={copyText}
        >
          Copy
        </button>
      </div>
      <div
        className={`container  ${
          props.mode === "primary" ? "text-dark" : "text-light bg-dark"
        }`}
      >
        <h5 className="my-3">Your Text Summary:</h5>
        <p className="my-1">
          Your message has{" "}
          {
            text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          Words and {text.length} letters
          <br></br>
          {tempVar}
        </p>
        <h3 className="my-4">{`${text === "" ? " " : "Preview"}`}</h3>
        <p>{text}</p>
        {/* {item.map((el) => {
          return <pre>{JSON.stringify(el)}</pre>;
        })} */}
      </div>
    </>
  );
}

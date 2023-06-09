import React, { useState } from "react";
import axios from "axios";
import "./theme.css";
import { BASE_URL } from "../constants";

function Chat() {
  const [txt, setTxt] = useState("");
  const [result, setResult] = useState("");

  function sendRequest() {
    if (txt === "" || txt.trim() === "") {
      alert("Provide more info!");
      return;
    }
    setResult("Loading...");
    axios
      .post(BASE_URL + "/queryContext", { text: txt })
      .then((res) => {
        var ans = res.data.text;
        setResult(ans);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div
      className="wrapper"
      style={{
        height: window.innerWidth < 500 ? "60vh" : "75vh",
      }}
    >
      <h1 className="heading">Query </h1>
      <div id="mainDiv">
        <div id={"upperDiv"}>
          <input
            type={"text"}
            id={"myInput"}
            placeholder={"Questions here"}
            value={txt}
            onChange={(e) => {
              setTxt(e.target.value);
            }}
          />
          <button
            id={"btn"}
            className="btn btn-success"
            onClick={() => sendRequest()}
          >
            Ask
          </button>
        </div>
        <hr className="horRow" />
        <div id={"resultingDiv"}>
          <pre
            id={"textHolder"}
            style={{
              maxHeight: window.innerWidth < 500 ? "45vh" : "55vh",
            }}
          >
            {result}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Chat;

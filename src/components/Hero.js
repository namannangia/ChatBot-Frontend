import React, { useState } from "react";
import axios from "axios";
import "./Hero.css";

function Hero({ transcript, setTranscript }) {
  const instance = axios.create({
    baseURL:
      "https://namannangia-bug-free-system-xg5x7r4959g36ppx-8800.preview.app.github.dev/api",
  });
  const handleResponse = (response) => {
    // alert(response.data)
    setTranscript(response);
  };
  function handleClick() {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "⁜";
    setTranscript("Loading! please wait...");
    instance
      .post("/fromUrlToText", { url: url })
      .then((response) => handleResponse(response.data))
      .catch((error) => console.log(error));
  }

  const [url, setUrl] = useState("");
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#448848",
        boxShadow: "7px 7px 3px 1px rgba(0,0,0,0.5)",
        margin: "4%",
        borderRadius: "20px",
        paddingBottom: "10%",
      }}
    >
      <div className="containerParent">
        <h1>YouTube Transcript v1</h1>
        <div
          className="containerChild"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            className="inputField"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            type="text"
            placeholder="Paste YouTube URL"
          ></input>
          <button className="SubmitButton" id="btn" onClick={handleClick}>
            <span>Go</span>{" "}
          </button>
        </div>
        <div className="textarea">
          <div className="textareaInner">{transcript}</div>
        </div>
        {/* <div className="blurCard"></div> */}

        <button
          style={{ zIndex: "2" }}
          hidden={transcript.length > "Loading! please wait...".length}
          onClick={() => {
            setTranscript(
              "This one minute English listening comprehension is specially designed for improving your listening skills. The topic of this lesson is gadget. Now look at the questions. You should answer the questions as you listen because you will not hear the recording a second time. Listen carefully and answer questions that are written on the screen. So we have a good news here. Now you can take your tunes with you without worrying about whether or not your headphones will stay in place. Yes, this is quite possible with the audios and glasses. The embedded speakers are located directly above the ears so it makes hearing easy and does not disturb anyone. An integrated microphone, Bluetooth and an augmented reality make these glasses an exceptional gadget. The frame is extremely light and is comfortable to wear. The glasses can also be used to make phone calls so these glasses are a good replacement for other wearable devices such as headphones. Now check your answers."
            );
          }}
        >
          Load Dummy Text
        </button>
      </div>
    </div>
  );
}

export default Hero;

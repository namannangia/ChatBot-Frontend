import React from "react";
import "./App.css";
// import "./components/Hero.css";
import Hero from "./components/Hero";
import Chat from "./components/Chat";

function App() {
  // const img_url = "https://images.hdqwalls.com/wallpapers/to-the-sky-qu.jpg";
  const [viewNumber, setViewNumber] = React.useState(0);
  const [transcript, setTranscript] = React.useState("");
  return (
    <div className="App">
      {/* <img src={img_url} alt="bg" /> */}
      {/* <div className="layer"></div> */}
      <header className="App-header" style={{ display: "flex" }}>
        {viewNumber === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // border: "1px solid red",
              alignItems: "center",
            }}
          >
            <Hero transcript={transcript} setTranscript={setTranscript} />
            <button
              className="SubmitButtonTwo"
              onClick={() => {
                setViewNumber((prev) => prev + 1);
              }}
              hidden={
                transcript.length <="Content recieved!".length 
              }
            >
              <span>Next Step</span>
            </button>
          </div>
        ) : (
          <Chat />
        )}
      </header>
    </div>
  );
}

export default App;

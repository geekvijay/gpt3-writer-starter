import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import buildspaceLogo from "../assets/buildspace-logo.png";

const Home = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTextChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handleGenerateClick = async () => {
    setIsGenerating(true);

    const res = await fetch("api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const { output } = await res.json();
    console.log(output.text);

    setOutput(output.text);
    setIsGenerating(false);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>tweet threader</h1>
          </div>
          <div className="header-subtitle">
            <h2>Write a sentence, what your tweet thread to be about</h2>
          </div>
          <div className="prompt-container">
            <textarea
              placeholder="start typing here"
              className="prompt-box"
              value={text}
              onChange={handleTextChange}
            ></textarea>

            <div className="prompt-buttons">
              <a
                className={`generate-button ${isGenerating ? "loading" : ""}`}
                onClick={handleGenerateClick}
              >
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div>

            {output && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>Output</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{output}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;

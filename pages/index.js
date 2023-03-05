import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import buildspaceLogo from "../assets/buildspace-logo.png";

const Home = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.currentTarget.value);
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
              onChange={handleChange}
            ></textarea>

            <div className="prompt-buttons">
              <a className="generate-button">
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div>
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

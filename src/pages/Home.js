import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 style={{ color: 'pink'}}> Hello, I am Arabella Morgado!</h2>
        <div className="prompt">
          <p>A Computer Science Student.</p>
          <a href="https://www.instagram.com/arabeeeels?igsh=MWcxcWxnaG55aDJ1eQ==">
            <InstagramIcon />
          </a>
          <a href="https://github.com/arabelsmorg">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> About Me </h1>
        <ol className="list">
          <li className="item">
            <span>
            I’m someone who finds happiness in the simple things—strumming my guitar and losing myself in its melodies, 
            or sitting by the shore, watching the waves roll in. One day, I hope to check off a 
            dream from my bucket list: traveling to Norway to witness the stunning beauty of the Northern Lights.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

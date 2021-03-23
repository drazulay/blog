import React from "react";

class About extends React.Component {
  render() {
    return <div>
        <h1>Hello.</h1>
        <p>
          My name is <strong>Daniel Azulay</strong>.
        </p>
        <p>
          Identity is mysterious. What does it mean to be? Maybe we are defined by what we produce and consume. 
        </p>
        <p>
          Writing code is my passion but I have many other interests. Look <a href="/blog">here</a> to see if you share some of them.
        </p>
        <p>
          <span className="PostTitle">
            &#128231;{" "}<a href="mailto:daniel.reubin.azulay@pm.me?subject=Site Contact">pm.me</a>
          </span>
        </p>
        <p>
          <span className="PostTitle">
            &#128273;{" "}<a href="https://keybase.io/drazulay">577E F33D E691 F99E</a>
          </span>
        </p>
    </div>;
  }
}

export default About;

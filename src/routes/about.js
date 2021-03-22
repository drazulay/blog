import React from "react";

class About extends React.Component {
  render() {
    return <div>
        <h1>Hello.</h1>
        <p>
          My name is <strong>Daniel Azulay</strong>.
        </p>
        <p>
          Writing code is my passion.
          My primary professional focus is Magento2 back-end development.
        </p>
        <p>
          My personal interests are broadly covered by terms such as
          {" "}
          <span className="QuotedList">
            engineering, cryptography, politics, behavior, philosophy, music, cinema
          </span>..
        </p>
        <p>
          There's too much interesting stuff out there and a person's follies are bound by a certain bandwidth.
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

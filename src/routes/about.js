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
            &#128273;{" "}<a href="https://keybase.io/drazulay">5D54 61A3 9955 2A8A</a>
          </span>
        </p>
        <p>
          <span className="PostTitle">
            &#9749;{" "}<a href="https://bmac.vecha.in/donate?name=Daniel%20Azulay&addr=0x93dd1812b51b2AB46bbbbD8DD89e29cb29Ab8D84&amount=10&msg=It's%20a%20cliche%20but%20I%20turn%20caffeine%20into%20code.">Buy me a coffee :)</a>
          </span>
        </p>
    </div>;
  }
}

export default About;

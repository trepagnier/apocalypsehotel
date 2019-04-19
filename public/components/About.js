import React from "react";

export default function About() {
  return (
    <div className="container" style={{ marginTop: 70 }}>
      <h2>About</h2>
      <p>
        Apocalypse Hotel is a code challenge for Roomkey, inspired by{" "}
        <a
          href="https://twitter.com/lbcyber/status/1115015586243862528"
          target="_blank"
        >
          this tweet
        </a>
        :
      </p>

      <blockquote
        style={{ padding: 15 }}
        className="twitter-tweet"
        data-lang="en"
      >
        <p lang="en" dir="ltr">
          <i>
            "Fun fact: You can make any Wikipedia article dystopian by changing
            it to the past tense."
          </i>
        </p>
        &mdash; Paul R (@lbcyber){" "}
        <a
          href="https://twitter.com/lbcyber/status/1115015586243862528?ref_src=twsrc%5Etfw"
          target="_blank"
        >
          April 7, 2019
        </a>
      </blockquote>

      <p>
        The app leverages the Roomkey API for locational search results by
        proxying the requests through{" "}
        <a href="https://cors-anywhere.herokuapp.com/" target="_blank">
          cors-anywhere
        </a>
        .
      </p>
    </div>
  );
}

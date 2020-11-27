import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <h1>Contactos</h1>
      <div className="social-list">
        <a
          href="https://www.youtube.com/channel/UCWndxpic9K77y4tjEQJXmcQ"
          target="_blank"
        >
          YouTube
        </a>
        <a href="https://www.meetup.com/es/javascriptpy/" target="_blank">
          Meetup
        </a>
        <a href="https://twitter.com/JavaScriptPY" target="_blank">
          Twitter
        </a>
        <a href="https://www.facebook.com/JavaScriptPY/" target="_blank">
          Facebook
        </a>
        <a href="https://t.me/javascriptpy" target="_blank">
          Telegram Javascript PY
        </a>
        <a href="https://t.me/ReactPY" target="_blank">
          Telegram React PY
        </a>
      </div>
    </Layout>
  );
};

export default Contact;

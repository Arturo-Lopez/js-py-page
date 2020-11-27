import React from "react";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <img src="/logo.png" alt="logo-javascript-py" className="image" />
      <h1>🚀 Despega Tu Desarrollo En React Con Next.js</h1>
      <img
        className="shield"
        src="https://img.shields.io/badge/Hecho%20con-Next.js-black"
        alt="shield"
      />
    </Layout>
  );
};

export default Home;

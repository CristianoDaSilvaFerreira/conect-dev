import React from "react";

import "./style.css";
import Header from './components/Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="navbar">Navbar</div>
        <div className="feed">Feed</div>
        </main>
    </div>
  );
}

export default Home;

import React from 'react';
import './Home.css';
// import './Home.css';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <main className="page-main">
        <h2>Home page clicked</h2>
        <p>switch pages to "about" to use router</p>
        <p>refresh page and state remains</p>
        <p> TODO add a state reset to clear local storage </p>
      </main>
    </>
  );
}

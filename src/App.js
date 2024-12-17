import "./App.css";
// import Button from "./img/components/Button";
// import Card from "./components/common/Card";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/common/Card.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import cardmockup from "./data/cardmockup";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        {cardmockup.length ? (
          cardmockup.map(({ title, img, text }) => (
            <Card title={title} img={img} text={text} />
          ))
        ) : (
          <div>Content hasnt loaded yet</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Review from "./Review";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
export default App;

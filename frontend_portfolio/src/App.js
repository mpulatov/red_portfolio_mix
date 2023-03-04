import React from "react";
import { Navbar } from "./components";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./container/index";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

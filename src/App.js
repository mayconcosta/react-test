import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
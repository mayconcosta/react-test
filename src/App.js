import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="clear-fix container-fluid">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
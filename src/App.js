import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Container />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;

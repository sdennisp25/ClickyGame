import React, { Component } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Row, Container } from "./components/Grid";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />

        <Main />
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
        <Row>
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>

        <Footer />
      </Container>
    );
  }
}
export default App;
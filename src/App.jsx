import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/Form";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ContactForm />
      </div>
    );
  }
}

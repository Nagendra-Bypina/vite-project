import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default class App extends React.Component {
  state = {
    contacts: [],
  };

  handleContactSubmit = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <ContactForm onFormSubmit={this.handleContactSubmit} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

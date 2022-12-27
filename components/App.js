import React, {Component} from "react";
import axios from 'axios';
import Header from "./Header";
import { addContact, createContact } from "../src/store";
import { connect } from "react-redux";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      firstName: '',
      lastName: '',
      emailAddress: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(event)
    this.props.createContact(this.state);
    
  }

  render() {
    const {contacts, firstName, lastName, emailAddress, message} = this.state;
    const {handleChange, handleSubmit} = this;

    return (
      <div>
      <Header contacts={contacts}/>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name:</label>
          <input type='text' name='firstName' value={firstName} onChange={handleChange}/>
          <label htmlFor="lastName">Last name:</label>
          <input type='text' name='lastName' value={lastName} onChange={handleChange}/>
          <label htmlFor="emailAddress">Email:</label>
          <input type='text' name='emailAddress' value={emailAddress} onChange={handleChange}/>
          <label htmlFor="message">Message:</label>
          <input type='text' name='message' value={message} onChange={handleChange}/>
          <button>SUBMIT</button>
        </form>
      
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createContact: (contact) => dispatch(addContact(contact)),
  }
}

export default connect(null, mapDispatchToProps)(App);


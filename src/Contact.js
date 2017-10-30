import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: "",
      email:"",
      phoneNumber:"",
      message:"",
      sucessClass:"",
      errorClass:"",
      successStyle:{
        display:"none"
      },
      errorStyle:{
        display:"none"
      }
    }
    this.fillName = this.fillName.bind(this);
    this.fillEmail = this.fillEmail.bind(this);
    this.fillPhoneNumber = this.fillPhoneNumber.bind(this);
    this.fillMessage = this.fillMessage.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  fillName(e){
    this.setState({name:e.target.value})
  }

  fillEmail(e){
    this.setState({email:e.target.value})
  }

  fillPhoneNumber(e){
    this.setState({phoneNumber:e.target.value})
  }

  fillMessage(e){
    this.setState({message:e.target.value})
  }



  sendForm(e){
    e.preventDefault();
    //check for empty mandatory fields
    if(this.state.name === "" || this.state.email === ""|| this.state.message ===""){
      alert('Please complete the mandatory fields')
    } else {
      //send e-mail using ajax call to formspree
      axios.post('https://formspree.io/lbbrizolla@gmail.com', {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      message:this.state.message,
      dataType: "json"
    })
      //if message is sucessfully sent change state to show success message
    .then(function (response) {
      this.setState({
        sucessClass:"animated fadeOut",
        successStyle:{
          display:"block",
          animationDuration: "5s"
        }
      })
    }.bind(this))
    .catch(function (error) {
      console.log(error);
      this.setState({
        errorClass:"animated fadeOut",
        errorStyle:{
          display:"block",
          animationDuration: "5s"
        }
      })
    }.bind(this));
      //clear all input fields, classes and styles
      this.setState({
        name:"",
        email:"",
        phoneNumber:"",
        message:"",
        sucessClass:"",
        errorClass:"",
        successStyle:{
          display:"none"
        },
        errorStyle:{
          display:"none"
        }
      })
    }
  }

  render(){
    return(
      <div id="contact">
        <h1>CONTACT ME</h1>
        <div className="container contactForm">
          <form noValidate>
            <div className="form-group nameInput">
              <label htmlFor="name"><span>* </span>Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.fillName}/>
            </div>
            <div className="form-group emailInput">
              <label htmlFor="email"><span>* </span>Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={this.state.email}
                onChange={this.fillEmail}/>
            </div>
            <div className="form-group phoneInput">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={this.state.phoneNumber}
                onChange={this.fillPhoneNumber}/>
            </div>
            <div className="form-group messageInput">
              <label htmlFor="message"><span>* </span>Message:</label>
              <textarea
                type="text"
                className="form-control"
                id="message"
                rows="10"
                value={this.state.message}
                onChange={this.fillMessage}/>
            </div>
          </form>
          <button
            className="btn"
            onClick={this.sendForm}
            >Send</button>
          <p className={this.state.sucessClass} id="sucess" style={this.state.successStyle}>Message Sent! I will reply you ASAP</p>
          <p className={this.state.errorClass}id="error" style={this.state.errorStyle}>Please enter a valid email address</p>
        </div>
      </div>
    );
  }
}

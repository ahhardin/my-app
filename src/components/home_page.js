import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contact: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A contact was added: ' + this.state.contact);
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-form">
        <Header />
        <h1>Meal Plan Requests</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type of Diet:
            <input type="text" className="diet" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Food Exclusions:
            <input type="text" className="exclude" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Target Calories:
            <input type="text" className="calories" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Day or Week:
            <input type="text" className="timeframe" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit" className="btn btn-primary">Create Meal Plan</button>
        </form>
      </div>
    );
  }
}

export default HomePage

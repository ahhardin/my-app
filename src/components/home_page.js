import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import Header from './header'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      diet: '',
      exclude: '',
      calories: '',
      timeframe: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your meal is being planned!');
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
            <input type="text" className="diet" value={this.state.diet} onChange={this.handleChange} />
          </label>
          <label>
            Food Exclusions:
            <input type="text" className="exclude" value={this.state.exclude} onChange={this.handleChange} />
          </label>
          <label>
            Target Calories:
            <input type="text" className="calories" value={this.state.calories} onChange={this.handleChange} />
          </label>
          <label>
            Day or Week:
            <input type="text" className="timeFrame" value={this.state.timeframe} onChange={this.handleChange} />
          </label>
          <button type="submit" className="btn btn-primary">Create Meal Plan</button>
        </form>
      </div>
    );
  }
}

export default HomePage

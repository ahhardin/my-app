import React, { Component } from 'react';
import { sendEvent, queryState } from '../state'
const API_KEY = "M8Na5UOHF8mshxZEgTlYkp39uyb4p1boQEkjsnP4hmi8Gk0DmY"
const axios = require('axios');


class App extends Component {
  constructor() {
    super()

    this.meals = this.getMeals()

  }

  getMeals() {
    return queryState("getMeals")
  }

  addMeal(meal) {
    sendEvent("addMeal", meal)
  }

  get_food() {

    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day',
      {headers: {
      "X-Mashape-Authorization": API_KEY
    }}
     ).then(response => {
       const meals = response.data.meals;
       for (let i=0; i<meals.length; i++) {
         const id = meals[i].id
         axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`,
           {headers: {
           "X-Mashape-Authorization": API_KEY
         }}
       ).then(response => {
         this.addMeal(response.data)
         this.meals = this.getMeals()
         for (let i=0; i<meals.length; i++) {
           console.log("all data", response.data)
           console.log("extracted data",this.meals)
         }
       })
       }
     }).catch(error => {
       console.error(error)
     })
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          TEST APP
        </header>
        <button className="btn btn-primary" onClick={this.get_food.bind(this)}>click here</button>
        <div className="row">
          <ul>
            {
              this.meals.map(m => (<li key={m.id}>

                {m.title} - {m.instructions}

              </li>))
            }
          </ul>

        </div>
      </div>
    );
  }
}

export default App;

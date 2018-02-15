import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './components/header.css'

const Header = () => (
      <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
        <li className="grid-cell">
          <Link className="navigation-link navigation-brand" to="/">
            Home
          </Link>
          --
          <Link className="navigation-link" to="/day">
            <i className="fa fa-comments"></i> Daily Meals
          </Link>
           --
          <Link className="navigation-link" to="/week">
            <i className="fa fa-comments"></i> Weekly Meals
          </Link>
          --
         <Link className="navigation-link" to="/recipe">
           <i className="fa fa-comments"></i> Single Recipe
         </Link>
        </li>
      </ul>
)


export default Header

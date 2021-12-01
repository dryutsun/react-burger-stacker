import BurgerContainer from './BurgerContainer'
import IngredientUnit from './IngredientUnit';
import IngredientList from './IngredientsList'
import React, {Component} from 'react'
import './App.css';


export default class BurgerApp extends Component {
    // * Setting Selected Ingredients to Empty Array
    state = {
        selectedIngredients: []
    }

    addIngredient = (e) => {
        console.log("adding ingredient")
        const currentBurgers = this.state.selectedIngredients
        const addedIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
        console.log(addedIngredient)
        console.log("this is the current state:", this.state.selectedIngredients)
        this.state.selectedIngredients.push(addedIngredient)
        this.setState({
            selectedIngredients: currentBurgers
        })
    }

    clearBurgerStack = (e) => {
        this.setState({
          selectedIngredients: []
        })
      }  

    render() {
        return(
            <div class="burgerApp">
                <BurgerContainer 
                selectedIngredients={this.state.selectedIngredients}
                clearBurgerStack={this.clearBurgerStack}/>
                <IngredientList 
                ingredients={this.props.ingredients}
                addIngredient={this.addIngredient}/>
            </div>
        )
    }
}

// I need to Set State

// I need a way to generate ingredients with click handlers

// I need a way to clear the stacked ingredients

// I need to render both the Ingredients Pane
// I need to pass ingredients down to Ingredients List
// I need a way to hoist ingredients out of ingredients list and into BurgerApp

// And the Burger Pane







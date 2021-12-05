import BurgerContainer from "./BurgerContainer";
import IngredientList from "./IngredientsList";
import "./App.css";
import React, { useState } from "react";


// Setting an ingredients variable to pass down

// I forgot to switch to burgerhooks...
const ingredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];

export default function BurgerApp(props) {

  // Setting State for Selected Ingredients Array
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Helper function to add ingredients to the burger plane.
  // Setting the Selected Ingredients, by including all 
  // Selected Ingredients already in State, with the New Ingredient.
  const addIngredient = (e) => {
    console.log("adding ingredient");

    const addedIngredient = {
      name: e.target.innerText,
      color: e.target.style.backgroundColor,
    }
    
    setSelectedIngredients((previousSelectedIngredients) => [
      ...selectedIngredients,
      addedIngredient,
    ])
  }


  // DEBUG: Seems like I kept trying to pass in an object
  // of Selected Ingredients: [], which React Did not Like
  // NOTE: Just pass the value I want to set it at if possible
  const clearBurgerStack = (e) => {
    setSelectedIngredients(() =>  []);
  };

  return (
    <div class="burgerApp">
      <BurgerContainer
        selectedIngredients={selectedIngredients}
        clearBurgerStack={clearBurgerStack}
      />
      <IngredientList ingredients={ingredients} addIngredient={addIngredient} />
    </div>
  );
}

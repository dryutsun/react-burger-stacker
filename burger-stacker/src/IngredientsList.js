import IngredientUnit from "./IngredientUnit";

export default function IngredientsList(props) {
  // Ingredient List will loop over props(ingredients) and produce an Ingredient Component for every ingredient in the ingredient array.
  let ingredientComponentGenerator = props.ingredients.map((unit, index) => {
    return (
      <li onClick={(e) => props.addIngredient(e)}>
        <IngredientUnit name={unit.name} color={unit.color} index={index} />
      </li>
    );
  });

  return (
    <div className="container">
      <ul>{ingredientComponentGenerator}</ul>
    </div>
  );
}

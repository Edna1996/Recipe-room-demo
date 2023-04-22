import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import AddRecipeForm from './AddRecipeForm';

const Groups = () => {
  const [recipes, setRecipes] = useState([
    // your recipes here
  ]);
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <div className="container">
      <h1 className="title">Group Recipes</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </div>
  );
};
export default Groups;
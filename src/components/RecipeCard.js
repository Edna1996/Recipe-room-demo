import React from 'react';
import './RecipeCard.module.css'

const RecipeCard = ({ image, name, ingredients, instructions }) => {
  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      <ul>
        {ingredients && Array.isArray(ingredients) && ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{instructions}</p>
      <img src={image} alt={name} />
    </div>
  );
};
export default RecipeCard;
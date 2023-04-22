import React, { useState } from 'react';
import styles from './AddRecipeForm.module.css';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { name, image, ingredients, instructions };
    onAddRecipe(newRecipe);
    setName('');
    setImage('');
    setIngredients([]);
    setInstructions('');
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Image:</label>
          <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Ingredients:</label>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <input type="text" value={ingredient} onChange={(event) => handleIngredientChange(event, index)} />
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Instructions:</label>
          <textarea value={instructions} onChange={(event) => setInstructions(event.target.value)} />
        </div>
        <button type="submit" className={styles.button}>Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

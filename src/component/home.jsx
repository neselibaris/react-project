import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    recipe: '',
    photo: null,
  });

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleInputChange = (e) => {
    if (e.target.name === 'photo') {
      setNewRecipe((prevRecipe) => ({
        ...prevRecipe,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setNewRecipe((prevRecipe) => ({
        ...prevRecipe,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();

    const recipe = {
      id: Date.now(),
      name: newRecipe.name,
      recipe: newRecipe.recipe,
      photo: newRecipe.photo,
      date: new Date().toLocaleDateString(),
    };
    console.log(newRecipe)

    setRecipes((prevRecipes) => [...prevRecipes, recipe]);

    setNewRecipe({
      name: '',
      recipe: '',
      photo: null,
    });
  };

  return (
    <div className='form'>
      <h1>Yemeğinizi Paylaşmak İçin Formu Doldurunuz..</h1>
      <form onSubmit={handleAddRecipe}>
        <input
          type="text"
          placeholder="Yemek Adı"
          name="name"
          value={newRecipe.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Tarif"
          name="recipe"
          value={newRecipe.recipe}
          onChange={handleInputChange}
        />
        <input className='photo'
          type="file"
          name="photo"
          onChange={handleInputChange}
        />
        <button type="submit">Yemek Ekle</button>
      </form>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/detail/${recipe.id}`}>
            <h3>{recipe.name}</h3>
            <div className="recipe-card">
              
              {recipe.photo && <img src={URL.createObjectURL(recipe.photo)} alt={recipe.name} />}
              
              <p>{recipe.recipe}</p>
              <h4>{recipe.date}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
}

export default Home;
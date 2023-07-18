import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Detail({ recipes }) {
  const { id } = useParams();
  const location = useLocation();
  const urlId = id || location.pathname.split('/')[2];

  console.log('URL ID:', urlId);
  console.log('Recipes:', recipes);

  const recipe = recipes.find((recipe) => recipe.id === parseInt(urlId));

  console.log('Found Recipe:', recipe);

  if (!recipe) {
    return <div className="notfound">Tarif bulunamadı. Lütfen tekrar deneyiniz...</div>;
  }

  const { name, recipe: recipeText, date, photo } = recipe;

  return (
    <div className="details">
      <h2>{name}</h2>
      <p>Tarif: {recipeText}</p>
      <p>Tarih: {date}</p>
      {photo && <img src={photo} alt={name} />}
    </div>
  );
}

export default Detail;
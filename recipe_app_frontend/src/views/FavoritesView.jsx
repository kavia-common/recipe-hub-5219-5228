 import React from 'react';
 import MainContent from '../components/MainContent';
 import { useRecipeStore } from '../context/RecipeStoreContext';
 import { RECIPES } from '../data/recipes';
 
 // PUBLIC_INTERFACE
 /**
  * FavoritesView renders only the recipes present in favorites.
  */
 export default function FavoritesView() {
   const { favorites } = useRecipeStore();
   const favSet = new Set(favorites);
   const recipes = RECIPES.filter(r => favSet.has(r.id));
 
   return (
     <section className="view">
       <h2 className="section-heading">Your Favorites</h2>
       <MainContent recipes={recipes} />
       {recipes.length === 0 && <p className="muted">You have no favorite recipes yet.</p>}
     </section>
   );
 }

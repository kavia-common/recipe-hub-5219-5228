 import React from 'react';
 import './styles.css';
 import RecipeCard from './RecipeCard';
 import RecipeModal from './RecipeModal';
 import { useRecipeStore } from '../context/RecipeStoreContext';
 
 // PUBLIC_INTERFACE
 /**
  * MainContent renders a grid of recipe cards and manages the modal state.
  * Props:
  * - recipes: Array<Recipe>
  */
 export default function MainContent({ recipes }) {
   const {
     isFavorite,
     toggleFavorite,
     collections,
     createCollection,
     addToCollection,
   } = useRecipeStore();
 
   const [openRecipe, setOpenRecipe] = React.useState(null);
 
   return (
     <main className="rh-main" role="main">
       <div className="grid">
         {recipes.map(r => (
           <RecipeCard
             key={r.id}
             recipe={r}
             isFavorite={isFavorite(r.id)}
             onToggleFavorite={toggleFavorite}
             onOpen={setOpenRecipe}
           />
         ))}
       </div>
 
       <RecipeModal
         recipe={openRecipe}
         isOpen={!!openRecipe}
         onClose={() => setOpenRecipe(null)}
         isFavorite={openRecipe ? isFavorite(openRecipe.id) : false}
         onToggleFavorite={toggleFavorite}
         collections={collections}
         onCreateCollection={createCollection}
         onAddToCollection={addToCollection}
       />
     </main>
   );
 }

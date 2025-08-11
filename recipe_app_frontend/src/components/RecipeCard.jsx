 import React from 'react';
 import './styles.css';
 
 // PUBLIC_INTERFACE
 /**
  * RecipeCard renders a single recipe summary.
  * Props:
  * - recipe: { id, title, category, rating, time, image }
  * - isFavorite: boolean
  * - onToggleFavorite(id): void
  * - onOpen(recipe): void
  */
 export default function RecipeCard({ recipe, isFavorite, onToggleFavorite, onOpen }) {
   return (
     <article className="recipe-card" aria-label={recipe.title}>
       <div className="image" role="img" aria-label={`${recipe.title} image`} style={{ backgroundImage: `url(${recipe.image})` }} />
       <div className="content">
         <div className="top-row">
           <span className="category">{recipe.category}</span>
           <div className="rating" title={`${recipe.rating} stars`}>
             <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.83L18.2 22 12 18.6 5.8 22 7 14.1l-5-4.83 6.91-1.01L12 2z"></path>
             </svg>
             <span>{recipe.rating.toFixed(1)}</span>
           </div>
         </div>
         <h3 className="title">{recipe.title}</h3>
         <div className="meta">
           <span className="time">{recipe.time}</span>
         </div>
       </div>
       <div className="card-actions">
         <button
           className={`bookmark ${isFavorite ? 'is-bookmarked' : ''}`}
           aria-label="Toggle favorite"
           aria-pressed={isFavorite}
           onClick={() => onToggleFavorite(recipe.id)}
           title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
         >
           <svg viewBox="0 0 24 24" aria-hidden="true">
             <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"></path>
           </svg>
         </button>
         <button className="btn btn-primary" onClick={() => onOpen(recipe)} aria-label="View details">
           View
         </button>
       </div>
     </article>
   );
 }

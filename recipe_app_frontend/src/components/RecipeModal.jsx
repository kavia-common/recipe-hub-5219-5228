 import React from 'react';
 import './styles.css';
 
 // PUBLIC_INTERFACE
 /**
  * RecipeModal shows details and collection actions.
  * Props:
  * - recipe
  * - isOpen: boolean
  * - onClose(): void
  * - isFavorite: boolean
  * - onToggleFavorite(id): void
  * - collections: Record<string, string[]>
  * - onCreateCollection(name): void
  * - onAddToCollection(name, id): void
  */
 export default function RecipeModal({
   recipe,
   isOpen,
   onClose,
   isFavorite,
   onToggleFavorite,
   collections,
   onCreateCollection,
   onAddToCollection
 }) {
   const [newCollection, setNewCollection] = React.useState('');
   const [selectedCollection, setSelectedCollection] = React.useState('');
 
   React.useEffect(() => {
     if (isOpen) {
       setSelectedCollection(Object.keys(collections)[0] || '');
     }
   }, [isOpen, collections]);
 
   if (!isOpen || !recipe) return null;
 
   return (
     <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Recipe details">
       <div className="modal">
         <div className="modal-header">
           <h2 className="modal-title">{recipe.title}</h2>
           <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
         </div>
         <div className="modal-body">
           <div className="modal-hero" style={{ backgroundImage: `url(${recipe.image})` }} aria-hidden="true" />
           <div className="modal-meta">
             <div className="pill">
               <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.83L18.2 22 12 18.6 5.8 22 7 14.1l-5-4.83 6.91-1.01L12 2z"></path>
               </svg>
               <span>{recipe.rating.toFixed(1)}</span>
             </div>
             <div className="pill">{recipe.time}</div>
             <div className="pill">{recipe.category}</div>
             <button
               className={`bookmark-inline ${isFavorite ? 'is-bookmarked' : ''}`}
               onClick={() => onToggleFavorite(recipe.id)}
               aria-pressed={isFavorite}
             >
               {isFavorite ? '★ Favorited' : '☆ Favorite'}
             </button>
           </div>
           <section>
             <h3>Ingredients</h3>
             <ul className="bullets">
               {recipe.ingredients.map((ing, idx) => (
                 <li key={idx}>{ing}</li>
               ))}
             </ul>
           </section>
           <section>
             <h3>Instructions</h3>
             <p>{recipe.instructions}</p>
           </section>
 
           <section className="collections">
             <h3>Add to Collection</h3>
             <div className="collections-row">
               <select
                 value={selectedCollection}
                 onChange={(e) => setSelectedCollection(e.target.value)}
                 aria-label="Select collection"
               >
                 {Object.keys(collections).length === 0 && <option value="">No collections</option>}
                 {Object.keys(collections).map(name => (
                   <option key={name} value={name}>{name}</option>
                 ))}
               </select>
               <button
                 className="btn"
                 disabled={!selectedCollection}
                 onClick={() => selectedCollection && onAddToCollection(selectedCollection, recipe.id)}
               >
                 Add
               </button>
             </div>
             <div className="collections-row">
               <input
                 type="text"
                 value={newCollection}
                 placeholder="New collection name"
                 onChange={(e) => setNewCollection(e.target.value)}
               />
               <button
                 className="btn"
                 onClick={() => {
                   const name = newCollection.trim();
                   if (name) {
                     onCreateCollection(name);
                     setNewCollection('');
                     setSelectedCollection(name);
                   }
                 }}
               >
                 Create
               </button>
             </div>
           </section>
         </div>
       </div>
     </div>
   );
 }

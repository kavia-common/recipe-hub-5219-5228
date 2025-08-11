 import React from 'react';
 import MainContent from '../components/MainContent';
 import { useRecipeStore } from '../context/RecipeStoreContext';
 import { RECIPES } from '../data/recipes';
 
 // PUBLIC_INTERFACE
 /**
  * CollectionsView lets users choose a collection and see its recipes.
  */
 export default function CollectionsView() {
   const { collections, createCollection, deleteCollection } = useRecipeStore();
   const names = Object.keys(collections);
   const [active, setActive] = React.useState(names[0] || '');
   const [newName, setNewName] = React.useState('');
 
   React.useEffect(() => {
     if (names.length && !names.includes(active)) {
       setActive(names[0]);
     }
   }, [names.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps
 
   const recipes = active
     ? RECIPES.filter(r => (collections[active] || []).includes(r.id))
     : [];
 
   return (
     <section className="view">
       <div className="collections-header">
         <h2 className="section-heading">Collections</h2>
         <div className="collections-actions">
           <input
             type="text"
             placeholder="New collection name"
             value={newName}
             onChange={(e) => setNewName(e.target.value)}
           />
           <button
             className="btn"
             onClick={() => {
               const name = newName.trim();
               if (name) {
                 createCollection(name);
                 setNewName('');
                 setActive(name);
               }
             }}
           >
             Create
           </button>
         </div>
       </div>
 
       <div className="collections-tabs" role="tablist" aria-label="Collections">
         {names.length === 0 && <span className="muted">No collections yet.</span>}
         {names.map(n => (
           <div key={n} className={`tab ${active === n ? 'active' : ''}`}>
             <button className="tab-btn" role="tab" aria-selected={active === n} onClick={() => setActive(n)}>
               {n}
             </button>
             <button className="tab-del" title="Delete collection" aria-label={`Delete ${n}`} onClick={() => deleteCollection(n)}>✕</button>
           </div>
         ))}
       </div>
 
       {active && <MainContent recipes={recipes} />}
       {active && recipes.length === 0 && <p className="muted">No recipes in this collection yet.</p>}
     </section>
   );
 }

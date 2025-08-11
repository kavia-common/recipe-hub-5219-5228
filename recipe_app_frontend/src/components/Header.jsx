 import React from 'react';
 import './styles.css';
 import { useRecipeStore } from '../context/RecipeStoreContext';
 
 // PUBLIC_INTERFACE
 /**
  * AppHeader renders the top navigation and search box.
  * Props:
  * - onSearch(text: string): void
  * - currentView: 'home' | 'favorites' | 'collections'
  * - onChangeView(view: string): void
  */
 export default function AppHeader({ onSearch, currentView, onChangeView }) {
   const { favorites, collections } = useRecipeStore();
   const [text, setText] = React.useState('');
 
   const handleSubmit = (e) => e.preventDefault();
 
   return (
     <header className="rh-header">
       <div className="brand">
         <span className="logo-dot" aria-hidden="true">🍲</span>
         <h1 className="brand-title">Recipe Hub</h1>
       </div>
 
       <form className="search" role="search" onSubmit={handleSubmit}>
         <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
           <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.5" fill="none"></circle>
           <line x1="17" y1="17" x2="21" y2="21" stroke="currentColor" strokeWidth="2"></line>
         </svg>
         <input
           type="text"
           value={text}
           placeholder="Search by name or ingredient..."
           aria-label="Search recipes"
           onChange={(e) => {
             const v = e.target.value;
             setText(v);
             onSearch?.(v);
           }}
         />
       </form>
 
       <nav className="nav">
         <button
           className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
           onClick={() => onChangeView('home')}
           aria-current={currentView === 'home' ? 'page' : undefined}
         >
           Home
         </button>
         <button
           className={`nav-item ${currentView === 'favorites' ? 'active' : ''}`}
           onClick={() => onChangeView('favorites')}
           aria-current={currentView === 'favorites' ? 'page' : undefined}
         >
           Favorites
           <span className="badge">{favorites.length}</span>
         </button>
         <button
           className={`nav-item ${currentView === 'collections' ? 'active' : ''}`}
           onClick={() => onChangeView('collections')}
           aria-current={currentView === 'collections' ? 'page' : undefined}
         >
           Collections
           <span className="badge">{Object.keys(collections).length}</span>
         </button>
       </nav>
     </header>
   );
 }

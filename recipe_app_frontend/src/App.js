import React from 'react';
import './App.css';
import AppHeader from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FavoritesView from './views/FavoritesView';
import CollectionsView from './views/CollectionsView';
import { RecipeStoreProvider } from './context/RecipeStoreContext';
import { RECIPES, getCategories } from './data/recipes';

// PUBLIC_INTERFACE
/**
 * Root application component. Renders layout and routes between simple views.
 */
function App() {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [view, setView] = React.useState('home'); // 'home' | 'favorites' | 'collections'

  // Filtering logic by query and category
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return RECIPES.filter(r => {
      const matchesQuery = q.length === 0
        || r.title.toLowerCase().includes(q)
        || r.ingredients.some(ing => ing.toLowerCase().includes(q));
      const matchesCategory = category === 'All' || r.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const categories = React.useMemo(() => getCategories(), []);

  return (
    <RecipeStoreProvider>
      <div className="app-shell">
        <AppHeader onSearch={setQuery} currentView={view} onChangeView={setView} />
        <div className="app-body">
          <Sidebar categories={categories} active={category} onChange={setCategory} />
          <div className="app-content">
            {view === 'home' && (
              <>
                <h2 className="section-heading">Browse Recipes</h2>
                <MainContent recipes={filtered} />
                {filtered.length === 0 && (
                  <p className="muted">No recipes found. Try a different search or category.</p>
                )}
              </>
            )}
            {view === 'favorites' && <FavoritesView />}
            {view === 'collections' && <CollectionsView />}
          </div>
        </div>
      </div>
    </RecipeStoreProvider>
  );
}

export default App;

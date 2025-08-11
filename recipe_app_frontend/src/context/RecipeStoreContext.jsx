 import React, { createContext, useContext, useMemo, useCallback } from 'react';
 import { useLocalStorage } from '../hooks/useLocalStorage';
 
 const RecipeStoreContext = createContext(null);
 
 // PUBLIC_INTERFACE
 /**
  * Provider that exposes favorites and collections state with helpers.
  * Data is persisted to localStorage.
  */
 export function RecipeStoreProvider({ children }) {
   const [favorites, setFavorites] = useLocalStorage('recipe:favorites', []);
   const [collections, setCollections] = useLocalStorage('recipe:collections', {}); // { [name]: string[] }
 
   const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
 
   // PUBLIC_INTERFACE
   /** Toggle favorite status for a recipe ID. */
   const toggleFavorite = useCallback((recipeId) => {
     setFavorites(prev => {
       const s = new Set(prev);
       if (s.has(recipeId)) s.delete(recipeId);
       else s.add(recipeId);
       return Array.from(s);
     });
   }, [setFavorites]);
 
   // PUBLIC_INTERFACE
   /** Check if a recipe is favorited. */
   const isFavorite = useCallback((recipeId) => favoriteSet.has(recipeId), [favoriteSet]);
 
   // PUBLIC_INTERFACE
   /** Create a new collection if it doesn't exist. */
   const createCollection = useCallback((name) => {
     if (!name) return;
     setCollections(prev => {
       if (prev[name]) return prev;
       return { ...prev, [name]: [] };
     });
   }, [setCollections]);
 
   // PUBLIC_INTERFACE
   /** Delete a collection entirely. */
   const deleteCollection = useCallback((name) => {
     setCollections(prev => {
       const clone = { ...prev };
       delete clone[name];
       return clone;
     });
   }, [setCollections]);
 
   // PUBLIC_INTERFACE
   /** Add recipe to a named collection (creates collection if missing). */
   const addToCollection = useCallback((name, recipeId) => {
     if (!name || !recipeId) return;
     setCollections(prev => {
       const cur = prev[name] || [];
       if (cur.includes(recipeId)) return prev;
       return { ...prev, [name]: [...cur, recipeId] };
     });
   }, [setCollections]);
 
   // PUBLIC_INTERFACE
   /** Remove recipe from a named collection. */
   const removeFromCollection = useCallback((name, recipeId) => {
     setCollections(prev => {
       const cur = prev[name] || [];
       return { ...prev, [name]: cur.filter(id => id !== recipeId) };
     });
   }, [setCollections]);
 
   const value = useMemo(() => ({
     favorites,
     collections,
     toggleFavorite,
     isFavorite,
     createCollection,
     deleteCollection,
     addToCollection,
     removeFromCollection,
   }), [
     favorites,
     collections,
     toggleFavorite,
     isFavorite,
     createCollection,
     deleteCollection,
     addToCollection,
     removeFromCollection,
   ]);
 
   return (
     <RecipeStoreContext.Provider value={value}>
       {children}
     </RecipeStoreContext.Provider>
   );
 }
 
 // PUBLIC_INTERFACE
 /**
  * Access the RecipeStore context of favorites and collections.
  */
 export function useRecipeStore() {
   const ctx = useContext(RecipeStoreContext);
   if (!ctx) throw new Error('useRecipeStore must be used within RecipeStoreProvider');
   return ctx;
 }

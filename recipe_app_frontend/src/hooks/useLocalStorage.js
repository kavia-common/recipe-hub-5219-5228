 // PUBLIC_INTERFACE
 /**
  * useLocalStorage hook for persisting state in localStorage with JSON serialization.
  * @param {string} key - The localStorage key to read/write.
  * @param {*} initialValue - The fallback value used when no value is in localStorage.
  * @returns {[any, Function]} stateful value and setter that also writes to localStorage.
  */
 import { useState, useEffect } from 'react';
 
 // PUBLIC_INTERFACE
 export function useLocalStorage(key, initialValue) {
   /** Persist a state value to localStorage (JSON). */
   const [storedValue, setStoredValue] = useState(() => {
     try {
       const item = window.localStorage.getItem(key);
       return item ? JSON.parse(item) : initialValue;
     } catch (error) {
       // Fallback if parsing fails
       console.warn('useLocalStorage read error:', error);
       return initialValue;
     }
   });
 
   useEffect(() => {
     try {
       window.localStorage.setItem(key, JSON.stringify(storedValue));
     } catch (error) {
       console.warn('useLocalStorage write error:', error);
     }
   }, [key, storedValue]);
 
   return [storedValue, setStoredValue];
 }

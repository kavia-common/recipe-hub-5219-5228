 import React from 'react';
 import './styles.css';
 
 // PUBLIC_INTERFACE
 /**
  * Sidebar filters by category using chips.
  * Props:
  * - categories: string[]
  * - active: string
  * - onChange(category: string): void
  */
 export default function Sidebar({ categories, active, onChange }) {
   return (
     <aside className="rh-sidebar" aria-label="Filters">
       <div className="sidebar-section">
         <h3 className="sidebar-title">Categories</h3>
         <div className="chips">
           {categories.map(cat => (
             <button
               key={cat}
               className={`chip ${active === cat ? 'chip--filled' : ''}`}
               onClick={() => onChange(cat)}
               aria-pressed={active === cat}
             >
               {cat}
             </button>
           ))}
         </div>
       </div>
     </aside>
   );
 }

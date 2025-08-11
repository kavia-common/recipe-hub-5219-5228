 // PUBLIC_INTERFACE
 /**
  * Static sample recipe dataset for the UI. In a real app, this would come from an API.
  */
 export const RECIPES = [
   {
     id: 'r1',
     title: 'Classic Greek Salad',
     category: 'Vegetables',
     rating: 4.5,
     time: '15 mins',
     ingredients: ['Tomatoes', 'Cucumber', 'Onion', 'Feta', 'Olives', 'Olive oil', 'Oregano'],
     instructions:
       'Chop vegetables. Crumble feta. Toss with olives and olive oil. Season with oregano and salt to taste.',
     image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r2',
     title: 'Crunchy Nut Coleslaw',
     category: 'Vegetables',
     rating: 3.5,
     time: '10 mins',
     ingredients: ['Cabbage', 'Carrot', 'Peanuts', 'Mayonnaise', 'Mustard', 'Lemon juice'],
     instructions:
       'Shred cabbage and carrots. Mix dressing from mayo, mustard, and lemon. Combine and top with peanuts.',
     image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r3',
     title: 'Shrimp & Sausage Jambalaya',
     category: 'Protein',
     rating: 3.0,
     time: '35 mins',
     ingredients: ['Shrimp', 'Andouille sausage', 'Rice', 'Bell pepper', 'Onion', 'Celery', 'Tomatoes'],
     instructions:
       'Sauté sausage and vegetables, add rice and tomatoes, simmer. Add shrimp near the end to cook through.',
     image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r4',
     title: 'Barbecue Chicken Jollof Rice',
     category: 'Local Dishes',
     rating: 4.5,
     time: '45 mins',
     ingredients: ['Chicken', 'Rice', 'Tomato paste', 'Onion', 'Bell pepper', 'Spices'],
     instructions:
       'Grill or bake BBQ chicken. Cook jollof rice with tomato paste and spices. Serve chicken over rice.',
     image: 'https://images.unsplash.com/photo-1604908176997-43192b72b30f?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r5',
     title: 'Portuguese Piri Piri Chicken',
     category: 'Protein',
     rating: 4.5,
     time: '40 mins',
     ingredients: ['Chicken', 'Piri piri sauce', 'Garlic', 'Lemon', 'Olive oil'],
     instructions:
       'Marinate chicken in piri piri sauce, garlic, lemon, and oil. Grill or roast until cooked through.',
     image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r6',
     title: 'Pilaf Sweet with Lamb and Raisins',
     category: 'Cereal',
     rating: 4.0,
     time: '30 mins',
     ingredients: ['Lamb', 'Rice', 'Raisins', 'Onion', 'Spices', 'Stock'],
     instructions:
       'Brown lamb and onions, add rice, raisins, spices, and stock. Simmer until rice is tender.',
     image: 'https://images.unsplash.com/photo-1601050690597-9f63f8280d11?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r7',
     title: 'Chicken with Broccoli in Sweet & Sour Sauce',
     category: 'Chinese',
     rating: 4.0,
     time: '25 mins',
     ingredients: ['Chicken', 'Broccoli', 'Vinegar', 'Sugar', 'Soy sauce', 'Garlic', 'Cornstarch'],
     instructions:
       'Stir-fry chicken and broccoli. Make sweet & sour sauce and thicken. Combine and serve with rice.',
     image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
   },
   {
     id: 'r8',
     title: 'Steak with Tomato Sauce and Bulgur',
     category: 'Protein',
     rating: 5.0,
     time: '35 mins',
     ingredients: ['Beef steak', 'Tomato sauce', 'Bulgur', 'Garlic', 'Olive oil', 'Herbs'],
     instructions:
       'Cook bulgur. Pan-sear steak to desired doneness. Warm tomato sauce with garlic and herbs. Plate together.',
     image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop',
   },
 ];
 
 // PUBLIC_INTERFACE
 /**
  * Derive categories from recipe dataset, with "All" first.
  */
 export const getCategories = () => {
   const cats = Array.from(new Set(RECIPES.map(r => r.category))).sort();
   return ['All', ...cats];
 };

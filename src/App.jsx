import { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';
import Filter from './components/Filter';
import './App.css'

const initialRestaurants = [
  { id: 1, name: 'Restaurant A', type: 'Fast Food', food: ['Burger', 'Fries', 'Soda'] },
  { id: 2, name: 'Restaurant B', type: 'Italian', food: ['Pizza', 'Pasta', 'Salad'] },
  { id: 3, name: 'Restaurant C', type: 'Vegetarian', food: ['Salad', 'Veggie Burger', 'Smoothie'] },
  // Add more restaurants as needed
];
function App() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [filters, setFilters] = useState({ type: '', food: '' });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({ type: '', food: '' });
  };

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, { ...newRestaurant, id: restaurants.length + 1 }]);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
  };


  const filteredRestaurants = restaurants.filter((restaurant) =>
    (filters.type ? restaurant.type === filters.type : true) &&
    (filters.food ? restaurant.food.includes(filters.food) : true)
  );

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <Filter filters={filters} onFilterChange={handleFilterChange} onReset={resetFilters} />
      <AddRestaurant onAdd={addRestaurant} />
      <RestaurantList restaurants={filteredRestaurants} onDelete={deleteRestaurant} />
    </div>
  );
}

export default App;
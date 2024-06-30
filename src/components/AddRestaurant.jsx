import PropTypes from 'prop-types';
import { useState } from 'react';
import './AddRestaurant.css';

const AddRestaurant = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [food, setFood] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && type && food && image && price) {
      onAdd({ name, type, food: food.split(',').map(item => item.trim()), image, price });
      setName('');
      setType('');
      setFood('');
      setImage('');
      setPrice('');
    }
  };

  return (
    <form className="add-restaurant" onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
      <input type="text" placeholder="Food (comma-separated)" value={food} onChange={(e) => setFood(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
AddRestaurant.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };
  

export default AddRestaurant;
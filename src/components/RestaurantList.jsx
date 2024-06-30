import PropTypes from 'prop-types';
import './RestaurantList.css';  

const RestaurantList = ({ restaurants, onDelete }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-item">
          <h3>{restaurant.name}</h3>
          <p>Type: {restaurant.type}</p>
          <p>Price: {restaurant.price}</p>
          <img src={restaurant.image} alt={restaurant.name} />
          <p>Food Items:</p>
          <ul>
            {restaurant.food.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={() => onDelete(restaurant.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

  RestaurantList.propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      food: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  
  export default RestaurantList;
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filters, onFilterChange, onReset }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      onFilterChange({ ...filters, [name]: value });
    };
  
    return (
      <div className="Filter">
        <label>
          Filter by Type:
          <select name="type" value={filters.type} onChange={handleChange}>
            <option value="">All</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Italian">Italian</option>
            <option value="Vegetarian">Vegetarian</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Filter by Food:
          <select name="food" value={filters.food} onChange={handleChange}>
            <option value="">All</option>
            <option value="Burger">Burger</option>
            <option value="Fries">Fries</option>
            <option value="Soda">Soda</option>
            <option value="Pizza">Pizza</option>
            <option value="Pasta">Pasta</option>
            <option value="Salad">Salad</option>
            <option value="Veggie Burger">Veggie Burger</option>
            <option value="Smoothie">Smoothie</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <button onClick={onReset}>Reset Filters</button>
      </div>
    );
  };
  Filter.propTypes = {
    filters: PropTypes.shape({
      type: PropTypes.string,
      food: PropTypes.string,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
  };
  
  
  export default Filter;
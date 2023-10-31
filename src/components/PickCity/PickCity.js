import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';

import { useState } from 'react';

const PickCity = ({onSearch}) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
      e.preventDefault()
      if (city.trim() !== '') {
          onSearch(city)
      }
  }

  return (
    <form className={styles.pickCityForm}> 
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <Button onClick={handleSearch}>Search</Button>
    </form>
  );
};

export default PickCity;
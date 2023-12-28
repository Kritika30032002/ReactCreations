import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const PropertyTypeFilter = () => {

  const {setProperty, properties} = useContext(HouseContext);

  const propertyTypeHandler = (event)=> {
    setProperty(event.target.value);
  }

  return (
    <Select placeholder='select type' onChange={propertyTypeHandler}>
      {
        properties.map((type, index)=> 
          <option key={index}>{type}</option>
        )
      }
    </Select>
  );
};

export default PropertyTypeFilter;
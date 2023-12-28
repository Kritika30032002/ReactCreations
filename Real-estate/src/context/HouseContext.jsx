import { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext('');

const HouseProvider = ({children}) =>{

    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Select Country');
    const [countries, setCountries] = useState([]);
    const [price, setPrice] = useState('Select Price');
    const [property, setProperty] = useState('Select type');
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const allCountries = houses.map(house=>{
            return house.country;
        })
        const uniqueCountries = [...new Set(allCountries)];
        setCountries(uniqueCountries);
    }, []);

    useEffect(() => {
        const allPropertyTypes = houses.map(house=>{
            return house.type;
        })
        const uniquePropertyTypes = [...new Set(allPropertyTypes)];
        setProperties(uniquePropertyTypes);
    }, []);

    const searchHandler=()=>{
        setIsLoading(true);
       
        // checking selection 
        const isDefault = (str)=> {
            return str.split(' ').includes('Select');
        }
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split('- ')[1]);

        const filteredHouses = housesData.filter(house=> {
            const housePrice = parseInt(house.price);
            // no selection 
            if(isDefault(country) && isDefault(price) && isDefault(property) ){
                return house;
            }

            // country is selected
            if(!isDefault(country) && isDefault(price) && isDefault(property)){
                return house.country === country;
            }
            
            // price is selected
            if(isDefault(country) && !isDefault(price) && isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            
            // property is selected
            if(isDefault(country) && isDefault(price) && !isDefault(property)){
                return house.type === property;
            }
            
            // country & price is selected
            if(!isDefault(country) && !isDefault(price) && isDefault(property)){
                return house.country === country && (housePrice >= minPrice) && (housePrice <= maxPrice);
            }
            
            // country & property is selected
            if(!isDefault(country) && isDefault(price) && !isDefault(property)){
                return house.country === country && house.type === property;
            }
            
            // price & property is selected
            if(isDefault(country) && !isDefault(price) && !isDefault(property)){
                return (housePrice >= minPrice) && (housePrice <= maxPrice) && house.type === property;
            }

            // all are selected 
            if(house.country === country && housePrice >= minPrice && housePrice <= maxPrice && house.type === property){
                return house;
            }
        })

        // setHouses(filteredHouses)
        setTimeout(() => {
            filteredHouses.length>0 ? setHouses(filteredHouses) : setHouses([]);
            setIsLoading(false);
        }, 1000);
    }
    
    return(
        <HouseContext.Provider value={{
            houses,
            country,
            setCountry,
            countries,
            price,
            setPrice,
            property,
            setProperty,
            properties,
            searchHandler,
            isLoading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;
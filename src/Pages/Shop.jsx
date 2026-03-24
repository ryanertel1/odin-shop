import ItemCard from '../Components/ItemCard';
import '../Styles/Shop.css';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

const Shop = ({...props}) => {

    const [storeItems, setStoreItems] = useState();
    const [loadingItems, setLoadingItems] = useState(true);
    const [error, setError] = useState(null);

    const searchInput = useOutletContext();

    const checkSearch = (data) => {
        //skips search if no search string provided
        if (!searchInput) { return true; }

        const lowerData = data.title.toLowerCase();
        
        for(const term of searchInput) {
            if (!lowerData.includes(term)) {
                return false;
            }
        }

        return true;
    }

    useEffect(() => {
        const fetchStoreItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setStoreItems(result);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoadingItems(false);
            }
        }

        fetchStoreItems();
    }, []);



    return (
        <div className='shop-container'>
            {loadingItems && <p>Loading data...</p>}
            {error && <p>Error: {error}</p>}
            {!loadingItems && !error && (
                <div className = 'item-container'>
                    {storeItems.filter(checkSearch).map(item => (
                        <ItemCard key={item.id} title={item.title} price={item.price} image={item.image}></ItemCard>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Shop;
import ItemCard from '../Components/ItemCard';
import '../Styles/Shop.css';
import { useState, useEffect } from 'react';

const Shop = () => {

    const [storeItems, setStoreItems] = useState();
    const [loadingItems, setLoadingItems] = useState(true);
    const [error, setError] = useState(null);

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
                    {storeItems.map(item => (
                        <ItemCard key={item.id} title={item.title} price={item.price} image={item.image}></ItemCard>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Shop;
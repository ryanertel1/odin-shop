import { useState } from 'react';

const Searchbar = ({...props}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        console.log(`search for ${searchQuery} initiated`);
        props.onSearchInput(searchQuery);
    }

    return (
        <div>
            <input
                type='text'
                value={ searchQuery }
                onChange={ handleInputChange }
                onKeyDown={ handleKeyDown }>
            </input>
        </div>
    )
}

export default Searchbar;
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
        props.onSearchInput(searchQuery);
    }

    return (
        <div className={props.className}>
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
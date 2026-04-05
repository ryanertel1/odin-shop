import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

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
            <MdSearch className='search-icon'/>
            <input
                type='search'
                value={ searchQuery }
                onChange={ handleInputChange }
                onKeyDown={ handleKeyDown }
                placeholder={ 'Search' }>
            </input>
        </div>
    )
}

export default Searchbar;
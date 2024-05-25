import { useState } from 'react';
import style from './SearchBar.module.scss';

import Lense from '/search.svg';

const SearchBar = () => {
    const [searchState, setSearchState] = useState('');

    return (
        <div className={style.search}>
            <label htmlFor="search" role="search" className={style.search_box}>
                <img src={Lense} alt="" />
                <input
                    type="text"
                    id="search"
                    onChange={(e) => setSearchState(e.target.value)}
                    value={searchState}
                    className={style.search_input}
                    placeholder="Search for your preffered city..."
                />
            </label>
        </div>
    );
};

export default SearchBar;


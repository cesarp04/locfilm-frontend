import React from 'react';
import '../assets/styles/components/SearchHeader.scss'
import iFilter from '../assets/static/i_filter.png' ;

const SearchHeader = () => (
        <div className="Header3__Search">
            <div className="Header3__Search-input">
                <input type="text" placeholder="You Locations"/> 
            </div>

            <div className="Header3__Search-filter">
            <a href="#"><img src={iFilter} alt=""/></a>
            </div>
            <a href="#" className="Header3__Search-BtnSearch">
                <p>Search</p>
            </a>
        </div>

);

export default SearchHeader;
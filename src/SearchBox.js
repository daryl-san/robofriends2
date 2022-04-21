import React from 'react';

const SearchBox = () => {
    return (
        <div className='pa2 tc'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeHolder='search robots'
            />
        </div>
    );
}

export default SearchBox;

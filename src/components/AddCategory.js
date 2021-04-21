import React, { useState } from 'react'
import Proptypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);

        //console.log('handleInputChange called');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log('handleSubmit', inputValue);

        if (inputValue.trim().length > 2) {
            setCategories( categories => [ inputValue, ...categories ] );        
            //setCategories( 1254885 );        
            setInputValue('');    
        }

    }

    return (
        
            <form onSubmit={ handleSubmit }>
                <p>{ inputValue }</p>
                <input  type="text"
                        value={inputValue}
                        onChange={ handleInputChange }
                />
            </form>
        
    )
}


AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}
import { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ( {target } ) => {
        setInputValue( target.value )
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newCategory = inputValue.trim()
        if( newCategory.length <= 1) return;

        //setCategories( categories => [inputValue, ...categories]);
        onNewCategory( newCategory );
        setInputValue('');
    }

  return (
    <form onSubmit={ ( event ) => onSubmit(event) } aria-label="form"> 
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}

import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({newItem, setnewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref = {inputRef}
        id='addItem'
        placeholder='Add Text'
        type='text'
        required 
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}/>
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}>
                <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem

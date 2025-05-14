    import React from 'react'

    // const ColorName = ({ color, setColor }) => {
    // return (
    //     <form className='colorform'>
    //         <label htmlFor='colorname'>ColorName</label>
    //         <input
    //             autoFocus
    //             id='colorname'
    //             type='text'
    //             placeholder='Add color name'
    //             required
    //             value = {color}
    //             onChange={(e) => setColor(e.target.value)}
    //         />
    //     </form>
    // )
    // }
    const ColorName = ({ color, setColor }) => {
  return (
    <form className='colorform'>
      <label htmlFor='colorname'>Color Name</label>
      <input
        autoFocus
        id='colorname'
        type='text'
        placeholder='Add color name'
        required
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};


    export default ColorName

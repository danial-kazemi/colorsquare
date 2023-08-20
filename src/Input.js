import React from 'react'
import colorNames from 'colornames'
const Input = ({colorValue ,setColorValue, setHexValue , propTest}) => {
  return (
    <form onSubmit={ (e)=> e.preventDefault() } >
        <label htmlFor="color">Add Color Value</label>

        <input
            autoFocus
            type="text"
            placeholder='Add color name'
            required
            id="color"
            value={colorValue}
            onChange={ (e)=> {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            } }
        />

    </form>
  )
}
Input.defaultProps ={
    propTest : "test"
}
export default Input
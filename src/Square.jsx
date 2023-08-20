

const Square = ({colorValue , hexValue}) => {
  return (    
    <section className='square'
        style={{ backgroundColor: colorValue ? colorValue : '#efefef' }}
    >
          <p className='colorName'
            style={{ color : colorValue ?  'black' :  'white' }}
            >
            { colorValue ? colorValue : 'No Color ' }
          </p>
          <p>
            {hexValue ? hexValue : null}
          </p>
    </section>
  )
}

export default Square
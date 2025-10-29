import React from 'react'

const Cart = (props) => {
  return (
    <div className='bg-sky-300 border-2 h-115 w-65 m-5 flex-col items-center'>
        <img src={props.img} alt="Not found" className='w-10 h-20' />
        <h3>Title:{props.title}</h3>
        <h4>Price:{props.price}</h4>
        <input type="button" value="Add to cart" className='border-2 rounded-sm bg-red-400'/>
    </div>
  )
}

export default Cart
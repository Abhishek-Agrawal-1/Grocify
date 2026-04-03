import React from 'react'
import Heading from '../Heading/Heading'
import { useState } from 'react'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'


const Products = () => {

  const catogeries = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
  const [activeTabs, setActiveTabs] = useState('All');


  const renderCards = ProductList.slice(0, 8).map(product => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    )
  })

  return (
    <section>
      <div className='mx-w-[1400px] mx-auto px-20 py-20'>
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className='flex gap-3 justify-center mt-10'>
          {catogeries.map((category) => {
            return (
              <button key={category}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer
              ${activeTabs === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                onClick={() => setActiveTabs(category)}
              >

                {category}
              </button>
            )
          })}
        </div>

        {/* Product Listing */}
        <div className='grid grid-cols-4 gap-9 mt-20'>
          {renderCards}
        </div>

      </div>
    </section>
  )
}

export default Products
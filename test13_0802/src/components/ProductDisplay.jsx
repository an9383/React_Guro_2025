/* eslint-disable no-unused-vars */
import React,{useMemo} from 'react'

const ProductDisplay = ({products, filterText}) => {
    const filteredProducts = useMemo(() => {
        return products.filter(product => product.name.includes(filterText)) 
    }, [products,filterText]
    )

  return (
    <div>
        {filteredProducts.map(p=><div key={p.id}>{p.name}</div>)}
    </div>
  )
}

export default ProductDisplay
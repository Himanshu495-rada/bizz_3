import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard';

import data from '../../components/data';

export default function Products() {
    const categories = [...new Set(data.map((product) => product.category))];

    const [products, setProducts] = useState(data);

    const filterProducts = (category) => {
        const newProducts = data.filter((product) => product.category === category);
        setProducts(newProducts);
    }
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">Our Products</h1>
            </div>
            <div>
                <center>
                    {categories.map((category, indx) => (
                        <button className="btn btn-outline-primary mx-2 mb-3" key={indx} onClick={() => filterProducts(category)} >{category}</button>
                    ))}
                </center>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {products.map((product, indx) => (
                                <div className="col-md-4" key={product.id} >
                                    <ProductCard
                                        image={product.img}
                                        name={product.name}
                                        description={product.long_description}
                                        price={product.price}
                                        id={product.id}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};


import React from 'react'
import ProductCard from '../../components/ProductCard';

import data from '../../components/data';

export default function Products() {
    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">Our Products</h1>
            </div>

            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {data.map((product, indx) => (
                                <div className="col-md-4">
                                    <ProductCard
                                        image={product.img}
                                        name={product.name}
                                        description={product.description}
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


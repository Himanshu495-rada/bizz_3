import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import './Products.css';

import PocketBase from 'pocketbase';

export default function Products() {

    const pb = new PocketBase(process.env.REACT_APP_URL);

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([...new Set(products.map((product) => product.category))]);

    const filterProducts = async (category) => {
        const records = await pb.collection('products').getFullList({
            sort: '-created',
        });
        const newProducts = records.filter((product) => product.category === category);
        setProducts(newProducts);
    }

    async function getProducts() {
        const records = await pb.collection('products').getFullList({
            sort: '-created',
        });
        setCategories([...new Set(records.map((product) => product.category))]);
        setProducts(records);
    }

    const handleSearch = (event) => {
        if (event.target.value === '') {
            getProducts();
            setSearchTerm('');
        } else {
            setSearchTerm(event.target.value);
            const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setProducts(filteredProducts);
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        getProducts();
        console.log(products);
    }, []);

    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">Featured Products</h1>
            </div>
            <Container>
                <Row className='align-items-center' >
                    <Col className='categories text-center' >
                        {categories.map((category, indx) => (
                            <button className="btn btn-outline-primary mx-2 mb-3" key={indx} onClick={() => filterProducts(category)} >{capitalizeFirstLetter(category)}</button>
                        ))}
                    </Col>
                    <Col className='text-end' >
                        <Form className="mb-3 searchForm">
                            <FormControl type="text" placeholder="Search Products" value={searchTerm} onChange={handleSearch} />
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {products.map((product, indx) => (
                                <div className="col-md-4" key={product.id} >
                                    <ProductCard
                                        image={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image}
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


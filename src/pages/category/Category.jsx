import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import './Category.css';
import { useParams } from 'react-router-dom';
import PocketBase from 'pocketbase';

export default function Category() {

    const pb = new PocketBase(process.env.REACT_APP_URL);

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    useEffect(() => {
        getProducts();
        filterProducts(category);
        console.log(products);
    }, []);

    return (
        <>
            <div className='my-5'>
                <h1 className="text-center">{category[0].toUpperCase() + category.slice(1)} Products</h1>
            </div>
            <Container>
                <Row className='align-items-center' >
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


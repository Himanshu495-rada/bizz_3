import React, { useEffect, useState } from 'react'
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';
import c1 from '../../assets/c 1.svg';
import c2 from '../../assets/c 2.svg';
import c3 from '../../assets/c 3.svg';
import paintCategory from '../../assets/paint-category.png';
import clothingCategory from '../../assets/clothing-category.png';
import stationeryCategory from '../../assets/stationery-category.png';
import gamesCategory from '../../assets/games-category.png';
import sportsCategory from '../../assets/sports-category.png';
import decorCategory from '../../assets/decor-category.png';
import electronicsCategory from '../../assets/electronics-category.png';
import fitnessCategory from '../../assets/health-category.png';


import './Home.css'

export default function Home() {

    const pb = new PocketBase(process.env.REACT_APP_URL);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 7,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992, // Adjust the breakpoint to your desired screen width
                settings: {
                    slidesToShow: 3, // Number of slides to show in tablet view
                },
            },
            {
                breakpoint: 576, // Adjust the breakpoint to your desired screen width
                settings: {
                    slidesToShow: 2, // Number of slides to show in mobile view
                },
            },
        ],
    };

    const categories = [
        { id: 1, name: 'Paint', image: paintCategory },
        { id: 2, name: 'Clothing', image: clothingCategory },
        { id: 3, name: 'Stationery', image: stationeryCategory },
        { id: 4, name: 'Games', image: gamesCategory },
        { id: 5, name: 'Sports', image: sportsCategory },
        { id: 6, name: 'Decor', image: decorCategory },
        { id: 7, name: 'Electronics', image: electronicsCategory },
        { id: 8, name: 'Fitness', image: fitnessCategory },
    ];

    async function getProducts() {
        const records = await pb.collection('products').getFullList({
            sort: '-created',
        });
        //set 6 products from records to products
        setProducts(records.slice(0, 6));
    }

    function openDescription(id) {
        navigate(`/productdescription/${id}`);
    }

    function openCategory(category) {
        console.log(category);
        navigate(`/category/${category}`);
    }

    useEffect(() => {
        getProducts();
        console.log(products);
    }, []);

    return (
        <section id='header' className="">
            <div className="container-fluid nav_bg mb-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={c3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div className='mt-5' >
                    <h4>Top Product Categories</h4>
                    <Slider {...settings}>
                        {categories.map((category) => (
                            <div key={category.id} className='category-card'>
                                <Card style={{ width: '10rem' }} onClick={() => openCategory(category.name.toLowerCase())} >
                                    <Card.Img className='cardImg' variant="top" src={category.image} />
                                    <Card.Body>
                                        <Card.Title className='text-center' >{category.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>


                <div className="latest-products mt-5">
                    <h4>Our latest products</h4>
                    <center>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {products.map((product) => (
                                <Col key={product.id}>
                                    <Card className="product-card" onClick={() => openDescription(product.id)} >
                                        <Card.Img
                                            variant="top"
                                            src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image}
                                            alt={product.name}
                                            className="product-image"
                                        />
                                        <Card.ImgOverlay className="product-overlay">
                                            <Card.Title className="product-name">{product.name}</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </center>
                </div>


            </div>

        </section>
    )
}

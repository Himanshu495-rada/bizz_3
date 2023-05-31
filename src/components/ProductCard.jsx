import React, { useState, useEffect } from 'react';
import './ProductCard.css'
import { useSelector, useDispatch } from 'react-redux';
import { addCart, addCompare } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import PocketBase from 'pocketbase';

const ProductCard = ({ image, name, description, price, id }) => {

    const products = useSelector(state => state.handleCompare);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pb = new PocketBase(process.env.REACT_APP_URL);
    const [data, setData] = useState([])

    async function buyNow() {
        const product = await pb.collection('products').getOne(id);
        dispatch(addCart(product));
        navigate('/cart');
    }

    const addToCart = () => {
        const product = data.find((item) => item.id === id);
        dispatch(addCart(product));
    }

    const addToCompare = () => {
        const product = data.find((item) => item.id === id);
        dispatch(addCompare(product));
    }

    function handleProductDescription() {
        navigate(`/productdescription/${id}`);
    }

    async function getProducts() {
        const records = await pb.collection('products').getFullList({
            sort: '-created',
        });
        setData(records);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <center>
            <div className="card mt-4">
                <div onClick={handleProductDescription} >
                    <div className="d-flex justify-content-center">
                        <img src={image} className="card-img-top" alt={name} width="400px"
                            height="200px" />
                    </div>

                    <hr />
                    <div className="card-body">
                        <h5 className="card-title text-center">{name.substring(0, 12)}...</h5>
                        <p className="card-text text-center">{description.substring(0, 90)}...</p>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="d-flex justify-content-center gap-2">
                        {pb.authStore.isValid ? (
                            <>
                                <button className="btn btn-outline-secondary" onClick={buyNow} >Buy Now</button>
                                <button className="btn btn-outline-primary" onClick={addToCart} >Add to Cart</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline-secondary" onClick={buyNow} disabled >Buy Now</button>
                                <button className="btn btn-outline-primary" onClick={addToCart} disabled >Add to Cart</button>
                            </>
                        )}


                        <button className="btn btn-outline-success" onClick={addToCompare} >Add to Compare</button>
                        {products.find((product) => product.id === id) ? (
                            <button className="btn btn-outline-success">Compare</button>
                        ) : (null)
                        }
                    </div>
                </div>
            </div>
        </center>
    );
};

export default ProductCard;

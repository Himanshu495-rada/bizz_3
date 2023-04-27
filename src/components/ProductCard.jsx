import React from 'react';
import './ProductCard.css'
import data from './data';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, addCompare } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, name, description, price, id }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    return (
        <div className="card mt-4">
            <div onClick={handleProductDescription} >
                <div className="d-flex justify-content-center">
                    <img src={image} className="card-img-top" alt={name} width="400px"
                        height="200px" />
                </div>

                <hr />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {/* <h6 className="card-subtitle mb-2 text-muted">${price}</h6> */}
                </div>
            </div>

            <div className="card-footer">
                <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-secondary">Buy Now</button>
                    <button className="btn btn-outline-primary" onClick={addToCart} >Add to Cart</button>
                    <button className="btn btn-outline-success" onClick={addToCompare} >Add to Compare</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

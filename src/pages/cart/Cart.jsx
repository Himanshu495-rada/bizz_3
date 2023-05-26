import React from "react";
import { delCart } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const cart = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (product) => {
        dispatch(delCart(product));
    };

    const cartItems = cart.map((product) => (
        <div className="row align-items-center mb-3" key={product.id}>
            <hr />
            <div className="col-3">
                <img src={process.env.REACT_APP_URL + "/api/files/products/" + product.id + "/" + product.image} alt={product.name} className="img-fluid" width="100px" height="100px" />
            </div>
            <div className="col-3">{product.name}</div>
            <div className="col-3">₹{product.price.toFixed(2)}</div>
            <div className="col-3">
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFromCart(product)}
                >
                    Remove
                </button>
            </div>
            <hr />
        </div>
    ));

    const totalPrice = cart.reduce(
        (accumulator, product) => accumulator + product.price,
        0
    );

    function checkout() {
        navigate("/checkout");
    }

    return (
        <div className="container border my-5">
            <center>
                <h2 className="mb-3 mt-3 ">Cart</h2>
            </center>
            <div className="row">
                <div className="col">
                    {cart.length > 0 ? (
                        <>
                            {cartItems}
                            <div className="row">
                                <div className="col-12">

                                    <h5 className="mb-3">Total: ₹{totalPrice.toFixed(2)}</h5>
                                    <button type="button" className="btn btn-primary mb-3" onClick={checkout} >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <center>
                            <p>Your cart is empty</p>
                        </center>
                    )}
                </div>
            </div>
        </div>
    );
};

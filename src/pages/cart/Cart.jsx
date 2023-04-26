import React from "react";
import { delCart } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
    const cart = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (product) => {
        dispatch(delCart(product));
    };

    const cartItems = cart.map((product) => (
        <div className="row align-items-center mb-3" key={product.id}>
            <div className="col-3">
                <img src={product.img} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-6">{product.name}</div>
            <div className="col-3">${product.price.toFixed(2)}</div>
            <div className="col-12">
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveFromCart(product)}
                >
                    Remove
                </button>
            </div>
        </div>
    ));

    const totalPrice = cart.reduce(
        (accumulator, product) => accumulator + product.price,
        0
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="mb-3">Cart</h2>
                    {cart.length > 0 ? (
                        <>
                            {cartItems}
                            <div className="row">
                                <div className="col-12">
                                    <hr className="my-4" />
                                    <h5 className="mb-3">Total: ${totalPrice.toFixed(2)}</h5>
                                    <button type="button" className="btn btn-primary">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
};

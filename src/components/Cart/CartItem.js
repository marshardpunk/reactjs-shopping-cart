import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, currency, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick} data-testid="miBoton">X</button>
                <span className="cart-item__name" data-testid="miSpan">{name}</span>
            </div>
            <div className="cart-item__price" data-testid="divPrecio">{price} {currency}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;

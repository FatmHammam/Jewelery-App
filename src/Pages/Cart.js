import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CartProducts from '../Components/CartProducts';

function Cart() {
    return (
        <div>
            <Header />
            <CartProducts />
            <Footer />
        </div>
    );
}

export default Cart;
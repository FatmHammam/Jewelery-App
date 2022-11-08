import React from 'react';
import styles from "./ActiveProduct.module.scss";
import MagnifiedProduct from './MagnifiedProduct';

function ActiveProduct() {
    return (
        <div className={styles.container}>
            <MagnifiedProduct />
            <div>
                <h1>APPROX.PRODUCT WEIGHT</h1>
                <table className={styles["table-bordered"]}>
                    <thead>
                        <th>Resin <p>0.5 Gr</p></th>
                        <th>14Kt<p>4.6 Gr</p></th>
                        <th>18Kt<p>5.3 Gr</p></th>
                        <th>21Kt<p>6.0 Gr</p></th>
                        <th>22Kt<p>6.2 Gr</p></th>
                    </thead>
                    <tbody>
                        <tr>
                            <p>Price: <span>0:0</span> $/Gr</p>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.addingToCart}>
                    <input type="checkbox" />
                    <span className={styles.addingToCart}>Add to cart</span>
                </div>
            </div>
        </div>
    );
}

export default ActiveProduct;

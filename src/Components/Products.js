import styles from "./Products.module.scss";
import React from 'react'
import ring1 from "../Images/ring1.png";
import ring2 from "../Images/ring2.png";
import ring3 from "../Images/ring12.png";
import ring4 from "../Images/ring4.png";
import ring5 from "../Images/ring5.png";
import ring6 from "../Images/ring6.png";
import ring7 from "../Images/ring7.png";
import ring8 from "../Images/ring8.png";
import ring9 from "../Images/ring9.png";
import ring10 from "../Images/ring10.png";
import ring11 from "../Images/ring11.png";
import ring12 from "../Images/ring12.png";
import { useNavigate } from 'react-router-dom';


function Products() {
    const elements = [ring1, ring2, ring3, ring4, ring5, ring6, ring7, ring8, ring9, ring10, ring11, ring12];
    const navigate = useNavigate();

    const goToSelectedProduct = () => {
        navigate('/selectedProduct')
    }
    return (
        <div className={styles.container}>
            {elements.map((value, index) => {
                return <div className={styles.rings}>
                    <img key={index} src={value} className={styles.ring} onClick={goToSelectedProduct} />
                    <div>
                        <input type="checkbox" />
                        <span className={styles.addingToCart}>Add to cart</span>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Products;
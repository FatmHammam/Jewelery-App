import styles from "./StoreDesigns.module.scss";
import Categories from "./Categories"
import Filter from "./Filter"
import Products from "./Products"
import React from 'react'

function StoreDesigns({ title, description }) {
    return (
        <div className={styles.container}>
            <Categories />
            <div className={styles.layout}>
                <h1>Printable Designs Store</h1>
                <p>In this store, Jewelry manufacturers can choose the desired designs and print them on their 3D printers in their factories.

                    Select your designs and quantities, and we will charge your 3D printer with ready platforms.</p>
                <div className={styles.access}>
                    <span>To access to our full catalog</span>
                    <a href="#">Register here</a>
                </div>
                <Filter />
                <Products />
                <div className={styles.pagesNumber}>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
        </div>
    );
}

export default StoreDesigns;
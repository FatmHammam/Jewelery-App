import styles from "./Categories.module.scss";
import React from 'react'

function Categories() {
    return (
        <div className={styles.container}>
            <a href="#">RINGS</a>
            <a href="#">FULLSETS</a>
            <a href="#">EARINGS</a>
            <a href="#">HALFSETS</a>
            <a href="#">BRACELETS</a>
            <a href="#">NECKLACES</a>
        </div>
    );
}

export default Categories;
import React from 'react'
import styles from "./Designs.module.scss";

function Designs() {
    return (
        <div className={styles.container}>
            <div className={styles.printable}>
                <h2>PRINTABLE DESIGNS</h2>
                <a className={styles.link}>FEED YOUY 3D PRINTER</a>
            </div>
            <div className={styles.resin}>
                <h2>3D PRINT RESIN</h2>
                <a className={styles.link}>ORDER</a>
            </div>
            <div className={styles.finished}>
                <h2>FINISHED JEWLERY</h2>
                <a className={styles.link}>ORDER</a>
            </div>
        </div>
    );
}

export default Designs;


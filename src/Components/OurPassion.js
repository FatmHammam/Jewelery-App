import styles from "./OurPassion.module.scss";
import React from 'react'

function OurPassion() {
    return (
        <div className={styles.container}>
            <h1>HIGH QUALITY DESIGNS WITH PASSION</h1>
            <div className={styles.info}>
                <div className={styles.vision}>
                    <h4>OUR VISION</h4>
                    <p>To be the ultimate House of creative and luxurious jewelry designs that defines desire and style, now and forever</p>
                </div>
                <div className={styles.mission}>
                    <h4>OUR MISSION</h4>
                    <p>We inspire jewelers with our creative designs to support them focus on what they do best, crafting and trading</p>
                </div>
            </div>
        </div>
    );
}

export default OurPassion;


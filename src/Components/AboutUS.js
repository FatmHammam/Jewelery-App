import styles from "./AboutUs.module.scss";
import React from 'react'

function AboutUs({ flexDirection, title, basicInfo, aboutUs, moreInfo, src, continueReading }) {
    return (
        <div className={styles.container}
            style={{
                flexDirection: flexDirection
            }}
        >
            <div>
                <img src={src} alt="" />
            </div>
            <div className={styles.info}>
                <h2>{title}</h2>
                <p>{basicInfo}</p>
                <p>{aboutUs}</p>
                <p>{moreInfo}</p>
                <a className={styles.more}>{continueReading}</a>
            </div>
        </div>
    );
}

export default AboutUs;

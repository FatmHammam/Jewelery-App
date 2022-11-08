import React from 'react'
import { Carousel } from "react-bootstrap";
import ring1 from "../Images/ring1.png";
import ring2 from "../Images/ring2.png";
import ring3 from "../Images/ring3.png";
import ring4 from "../Images/ring4.png";
import ring5 from "../Images/ring5.png";
import ring6 from "../Images/ring6.png";
import ring7 from "../Images/ring7.png";
import ring8 from "../Images/ring8.png";
import ring9 from "../Images/ring9.png";
import ring10 from "../Images/ring10.png";
import ring11 from "../Images/ring11.png";
import ring12 from "../Images/ring12.png";
import styles from "../Components//Rings.module.scss";

function Rings() {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img src={ring1} className={styles.img} alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ring2} className={styles.img} alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img src={ring3} className={styles.img} alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ring4} className={styles.img} alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img src={ring5} className={styles.img} alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ring6} className={styles.img} alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img src={ring7} className={styles.img} alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ring8} className={styles.img} alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img src={ring9} className={styles.img} alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ring10} className={styles.img} alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <Carousel.Item>
                        <img src={ring11} className={styles.img} alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ring12} className={styles.img} alt="..." />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Rings;
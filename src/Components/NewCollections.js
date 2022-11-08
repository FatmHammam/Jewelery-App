import React from 'react'
import { Carousel } from "react-bootstrap";
import new1 from "../Images/new1.png";
import new2 from "../Images/new2.png";
import new3 from "../Images/new3.png";
import new4 from "../Images/new4.png";
import styles from "../Components//NewCollections.module.scss";

function NewCollections() {
    return (
        <div className={styles.container}>
            <Carousel>
                <Carousel.Item>
                    <div class="carousel-inner">
                        <div className={styles.slide}>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>NEW COLLECTION</h2>
                            </div>
                            <p>EXPLORE NOW !</p>
                            <div className={styles.line}></div>
                            <img src={new1} className={styles.img} alt="..." />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="carousel-inner">
                        <div className={styles.slide}>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>NEW COLLECTION</h2>
                            </div>
                            <p>WITH YOU NOW</p>
                            <div className={styles.line}></div>
                            <img src={new2} className={styles.img} alt="..." />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="carousel-inner">
                        <div className={styles.slide}>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>NEW COLLECTION</h2>
                            </div>
                            <p>WITH YOU NOW</p>
                            <div className={styles.line}></div>
                            <img src={new3} className={styles.img} alt="..." />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="carousel-inner">
                        <div className={styles.slide}>
                            <div class="carousel-caption d-none d-md-block">
                                <h2>NEW COLLECTION</h2>
                            </div>
                            <p>WITH YOU NOW</p>
                            <div className={styles.line}></div>
                            <img src={new4} className={styles.img} alt="..." />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default NewCollections;
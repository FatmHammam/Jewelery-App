import React from 'react'
import { Carousel } from "react-bootstrap";
import slider5 from "../Images/slider5.png";
import slider2 from "../Images/slider2.png";
import slider3 from "../Images/slider3.png";
import slider4 from "../Images/slider4.png";
import slider9 from "../Images/slider9.png";
import slider10 from "../Images/slider10.png";
import Styles from "../Components/ImageSlider.module.scss";

function ImageSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <div class="carousel-inner">
                    <div className={Styles.slide}>
                        <img src={slider2} className={Styles.img} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>DREAM IT, WE CAN MAKE IT</h5>
                            <p>Jewelry designing is the core of our business. We deliver our jewelry designs to jewelry manufacturers and wholesalers in three different phases.</p>
                        </div>
                        <img src={slider4} className={Styles.img} alt="..." />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="carousel-inner">
                    <div className={Styles.slide}>
                        <img src={slider9} className={Styles.img} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>PRINTABLE DESIGNS</h5>
                            <p>We provide Jewelry Designs to be printed on client’s 3D printer. Charge your 3D printer with our designs</p>
                        </div>
                        <img src={slider3} className={Styles.img} alt="..." />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="carousel-inner">
                    <div className={Styles.slide}>
                        <img src={slider10} className={Styles.img} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>FINISHED JEWLERY</h5>
                            <p>We provide our designs manufactured in the desired gold karat for wholesalers.Make your order</p>
                        </div>
                        <img src={slider5} className={Styles.img} alt="..." />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSlider;
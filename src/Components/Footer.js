import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.company}>
                    <h4>Company</h4>
                    <a>Home</a>
                    <a>About US</a>
                    <a>Privacy Policy</a>
                    <a>Terms and conditions</a>
                </div>
                <div className={styles.store}>
                    <h4>Store</h4>
                    <a>Printable Designs</a>
                    <a>3D Printed Resin</a>
                    <a>Finished Jewlery</a>
                </div>
                <div className={styles.address}>
                    <h4>Address</h4>
                    <p> <FontAwesomeIcon icon={faLocationPin} color="#c7bebe" /> Fifth Settelment </p>
                    <p> Down Town</p>
                </div>
                <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <p> <span><FontAwesomeIcon icon={faPhone} color="#c7bebe" /> </span> 01025144737</p>
                    <p> <span><FontAwesomeIcon icon={faPhone} color="#c7bebe" /> </span> 01000707169</p>
                    <p><span>  <FontAwesomeIcon icon={faEnvelope} color="#c7bebe" /> </span> fa.hammam95@gmail.com</p>
                </div>
                <div className={styles.stayTuned}>
                    <h4>Stay Tuned With Our News</h4>
                    <div className={styles.subscribe}>
                        <input type="text" placeholder='Email Address' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className={styles.copyRights}>
                <p>Copyright © 2022 Batot Design. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
import styles from "./GetInTouch.module.scss";
import officeGuy from '../Images/officeGuy.jpg'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

function GetInTouch() {
    return (
        <div className={styles.container}>
            <img src={officeGuy} className={styles.officeGuy} />
            <div className={styles.contact}>
                <h3>Contact Us</h3>
                <div className={styles.line}></div>
                <p className={styles.questions}>Our team will be happy to answer your questions as soon as possible.</p>
                <div className={styles.info}>
                    <div className={styles.address}>
                        <FontAwesomeIcon icon={faMap} color="#c5ad60" fontSize={"30px"} />
                        <h4>Address</h4>
                        <p>Fifth Settelment at Down Town Mall</p>
                    </div>
                    <div className={styles.call}>
                        <FontAwesomeIcon icon={faPhone} color="#c5ad60" fontSize={"30px"} />
                        <h4>Call us</h4>
                        <p> <span>+20</span>01025144737</p>
                        <p> <span>+20</span>01000707169</p>
                    </div>
                    <div className={styles.office}>
                        <FontAwesomeIcon icon={faClock} color="#c5ad60" fontSize={"30px"} />
                        <h4>Our Office</h4>
                        <p>Monday - Friday: 9:00 - 18:00</p>
                    </div>
                    <div className={styles.email}>
                        <FontAwesomeIcon icon={faEnvelope} color="#c5ad60" fontSize={"30px"} />
                        <h4>E-mail</h4>
                        <p>fa.hammam95@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch


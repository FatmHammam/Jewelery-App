import styles from "./TalkToUs.module.scss";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

function TalkToUs() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <form>
                    <input placeholder="name" className={styles.input} />
                    <input placeholder="email" className={styles.input} />
                    <input placeholder="phone" className={styles.input} />
                    <input placeholder="date" className={styles.input} />
                    <input placeholder="address" className={styles.input} />
                    <input placeholder="package" className={styles.input} />
                    <textarea placeholder="note" className={styles.textArea} />
                    <button className={styles.button}>TALK TO US</button>
                </form>
                <div>
                    <h2>Get In Touch With Us</h2>
                    <FontAwesomeIcon icon={faHandPointer} className={styles.animate} color="#c5ad60" fontSize={"200px"} />
                </div>
            </div>
        </div>
    );
}

export default TalkToUs;

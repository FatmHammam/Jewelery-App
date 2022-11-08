import styles from "./Events.module.scss";
import co from "../Images/co.jpg"
import React from 'react'

function Events() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={co} />
                <p>Join Us - Looking to meet with you up their!</p>
            </div>
            <p className={styles.events}>Our Events</p>
            <div className={styles.details}>
                <div className={styles.navigate}>
                    <button className={styles.active}>Next Event</button>
                    <button>Next Event</button>
                </div>
                <p>No Event Found</p>
            </div>
        </div>
    );
}

export default Events;
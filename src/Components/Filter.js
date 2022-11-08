import styles from "./Filter.module.scss";
import React from 'react'

function Filter() {
    return (
        <div className={styles.container}>
            <span>Weight:</span>
            <select class="form-select " aria-label="Default select example">
                <option value="1">14 Karat</option>
                <option value="2">18 Karat</option>
                <option value="3">21 Karat</option>
                <option value="3">22 Karat</option>
            </select>

            <form>
                <label for="customRange1" class="form-label">Gr</label>
                <input type="range" min="1" max="100" className={styles.slider} id="myRange" />
            </form>

            <div className={styles.apply}>
                <button>Apply Filter</button>
                <button>Go To Cart</button>
            </div>
        </div>
    );
}

export default Filter;
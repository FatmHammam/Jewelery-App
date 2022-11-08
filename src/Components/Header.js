import React from 'react'
import styles from "./Header.module.scss";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="" className={styles.logo} />
            </div>
            <div className={styles.SearchAndLinks}>
                <div className="SearchBar">
                    <input type="text" className={styles.searchInput} placeholder="Search" />
                    <FontAwesomeIcon icon={faSearch} color="#fff" className={styles.searchIcon} />
                    <FontAwesomeIcon icon={faCartShopping} color="#fff" />
                </div>
                <div className={styles.links}>
                    <a href="/">HOME</a>
                    <a href="/store">STORE</a>
                    <a href="/exhibitions">EXHIBITIONS</a>
                    <a href="/about">ABOUT US</a>
                    <a href="/contact">CONTACT</a>
                    <a href="/login">SIGN IN</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
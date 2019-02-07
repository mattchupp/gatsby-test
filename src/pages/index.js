import React from "react"
import Header from '../components/header';
import { Link } from "gatsby"
import styles from '../styles/styles.module.css';

export default () => (
  <div className={styles.container} style={{ color: 'purple'}}>
    <h1>Hello Gatsby!</h1>
    <Header name="Matt" />
    <Link to="/about/">About</Link>
  </div>
)

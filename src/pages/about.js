import React from 'react';
import { Link } from "gatsby"
import Header from '../components/header';
import styles from '../styles/styles.module.css';

export default() => (
  <div className={styles.container} style={{ color: 'purple'}}>
    <h1>About!</h1>
    <Header name="Matt" />
    <Link to="/">Home</Link>
  </div>
)

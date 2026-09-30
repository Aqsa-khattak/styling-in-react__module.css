import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
    <h2>Aqsa Khattak</h2>
       <button className={styles.button}>Login</button>   
    </div>
  )
}

export default Header

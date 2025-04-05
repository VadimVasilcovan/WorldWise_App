import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'
import React from 'react'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <Outlet/>
        <footer className={styles.footer}></footer>
        <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
    </div>
  )
}

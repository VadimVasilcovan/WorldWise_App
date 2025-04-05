import React from 'react'
import Sidebar from '../assets/components/Sidebar'
import Map from '../assets/components/Map'
import styles from './AppLayout.module.css'
export default function AppLayout() {
  return (
    <div className={styles.app}>
       <Sidebar/>
       <Map/>
    </div>
  )
}

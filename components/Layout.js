import React from 'react'
import styles from '@/styles/layout.module.scss'

const Layout = ({children}) => {
  return (
    <sectoin className={styles.section}>
      <div className={styles.section_inner}>
        {children}
      </div>
    </sectoin>
  )
}

export default Layout

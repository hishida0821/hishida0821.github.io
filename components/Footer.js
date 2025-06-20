import React from 'react'
import styles from '@/styles/footer.module.scss'

export default function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <p className={styles.footer_copy}>© HIROKI ISHIDA</p>
      </div>
    </footer>
  )
}

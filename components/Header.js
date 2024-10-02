import Link from 'next/link'
import React from 'react'
import Navigation from '@/components/Navigation'
import styles from '@/styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_logo}>
          <Link href="/">HIROKI ISHIDA</Link>
        </div>
        <Navigation />
      </div>
    </header>
  )
}

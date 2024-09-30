import Link from 'next/link'
import React from 'react'
import styles from '@/styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_logo}>
          <Link href="/">HIROKI ISHIDA</Link>
        </div>
        <nav className={styles.header_navigation}>
          <ul className={styles.header_navigation_list}>
            <li className={styles.header_navigation_item}><Link href="/about/">ABOUT</Link></li>
            <li className={styles.header_navigation_item}> <Link href="/works/">WORKS</Link></li>
            <li className={styles.header_navigation_item}><Link href="/blog/">BLOG</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

import Link from 'next/link'
import React from 'react'
import styles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">LOGO</Link>
        <Link href="/about/">About</Link>
        <Link href="/works/">Works</Link>
        <Link href="/blog/">Blog</Link>
      </div>
    </header>
  )
}

export default Header

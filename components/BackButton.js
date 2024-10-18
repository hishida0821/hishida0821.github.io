import React from 'react'
import Link from 'next/link'
import styles from '@/styles/backButton.module.scss'

const BackButton = () => {
  return (
    <Link className={styles.back_button} href="/">TOPへ</Link>
  )
}

export default BackButton
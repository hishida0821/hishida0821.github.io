import React from 'react'
import Link from 'next/link'
import styles from '@/styles/button.module.scss'

const Button = ({ children, variant, url }) => {
  return (
    <Link className={`${styles.button} ${styles[`button_${variant}`]}`} href={url}>
      {children}
    </Link>
  );
};

export default Button
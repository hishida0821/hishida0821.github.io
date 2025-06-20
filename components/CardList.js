import styles from '@/styles/cardList.module.scss'

export default function CardList({children}) {
  return (
    <div className={styles.cardList}>
      {children}
    </div>
  )
}
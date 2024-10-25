import styles from '@/styles/card.module.scss'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <a href={props.url}>
        <figure className={styles.card_thumbnail}>
          <img src={props.image} alt={props.title} />
        </figure>
        <span className={styles.card_category}>{props.category}</span>
        <span className={styles.card_date}>{props.date}</span>
        <p className={styles.card_title}>{props.title}</p>
        <p className={styles.card_text}>{props.text}</p>
      </a>
    </div>
  )
}
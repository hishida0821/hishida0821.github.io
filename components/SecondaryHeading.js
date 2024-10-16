import styles from '@/styles/SecondaryHeading.module.scss'

export default function SecondaryHeading(props) {
  return (
    <h2 className={styles.secondary_heading}>{props.text}</h2>
  )
}

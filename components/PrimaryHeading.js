import styles from '@/styles/PrimaryHeading.module.scss'

export default function PrimaryHeading(props) {
  return (
    <h1 className={styles.primary_heading}>{props.text}</h1>
  )
}
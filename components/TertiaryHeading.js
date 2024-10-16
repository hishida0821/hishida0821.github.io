import styles from '@/styles/TertiaryHeading.module.scss'

export default function TertiaryHeading(props) {
  return (
    <h3 className={styles.tertiary_heading}>{props.text}</h3>
  )
}

import styles from 'src/components/Headline/Headline.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <div>
        <p className={styles.description}>
          {props.description}
        </p>
        <p className={styles.formula}>
          {props.formula}
        </p>
      </div>
    </div>
  )
}
import styles from 'src/styles/Home.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <div className={styles.allDescription}>
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
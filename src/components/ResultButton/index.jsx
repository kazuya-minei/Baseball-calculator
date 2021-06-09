import styles from "src/components/ResultButton/ResultButton.module.css";

export function ResultButton(props) {
  return (
    <> 
      <h3 className={styles.result}>{props.result}</h3>
      <button className={styles.button} onClick={props.functiontype}>計算</button>
    </>
  )
}
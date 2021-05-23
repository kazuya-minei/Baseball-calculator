import styles from "src/components/Header/Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <h1>野球計算機</h1>
      </a>
    </header>
  )
}
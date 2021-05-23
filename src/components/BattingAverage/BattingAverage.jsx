import { useState } from 'react';
import { Headline } from 'src/components/Headline';
import styles from "src/components/BattingAverage/BattingAverage.module.css";

export function BattingAvarage() {
  let [BA, setBA] = useState("打率0割0分0厘");
  const getAvarage = () => {
    const bats = document.getElementById('bats').value;
    const hits = document.getElementById('hits').value;
    const avarage = String(hits/bats);
    const result = Array.from(avarage);
    if (bats && hits) {
      setBA(`打率${result[2]}割${result[3]}分${result[4]}厘`);
    }
  }

  return (
    // React.Fragment
    <> 
      <Headline  
        title="打率" 
        description="打席数から四死球、犠打、犠飛を除いた打数のうち、安打の割合を表します。"
        formula="打率 ＝ 安打数÷打数"
      />

      <div>
        <h3 className={styles.item}>打席数</h3>
        <input type="number" id="bats" className={styles.form}/>
      </div>

      <div>
        <h3 className={styles.item}>安打数</h3>
        <input type="number" id="hits" className={styles.form}/>
      </div>

      <h3 className={styles.result}>{BA}</h3>
      <button className={styles.button} onClick={getAvarage}>計算</button>
    </>
    // React.Fragment
  )
}

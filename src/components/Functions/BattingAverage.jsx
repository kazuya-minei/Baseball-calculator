import { useCallback, useState } from 'react';
import { Headline } from 'src/components/Headline';
import styles from "src/components/Functions/Functions.module.css";

export function BattingAvarage() {
  let [BA, setBA] = useState("打率0割0分0厘");
  
  const getAvarage = useCallback(() => {
    function getNumResult(params) {
      const bats = document.getElementById('bats').value;  // 打席数
      const hits = document.getElementById('hits').value;  // 安打数
      const avarage = hits/bats;  // 計算
      const res = Math.round(avarage * 1000)/1000;  // 四捨五入
      const SetResult = String(res); // 文字列変換
      return Array.from(SetResult);  // 配列変換
    }
    let NumResult = getNumResult();
    if (NumResult[0] === "1") {
      setBA(`10割打者!? 首位打者は君だ!`);
    } else if (!NumResult[4]) {
      setBA(`打率${NumResult[2]}割${NumResult[3]}分`);
    } else {
      setBA(`打率${NumResult[2]}割${NumResult[3]}分${NumResult[4]}厘`);
    };
  }, []);

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

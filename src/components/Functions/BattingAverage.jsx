import { useCallback, useState } from 'react';
import { Headline } from 'src/components/Headline';
import styles from "src/components/Functions/Functions.module.css";

export function BattingAvarage() {
  let [BA, setBA] = useState("打率0割0分0厘");
  
  const getAvarage = useCallback(() => {
    const bats = document.getElementById('bats').value;  // 打席数
    const hits = document.getElementById('hits').value;  // 安打数
    const avarage = String(hits/bats);  // 計算結果を文字列に変換し
    const SetResult = Array.from(avarage);   // 配列に1文字ずつ分解して格納
    let NumResult = SetResult.map(function (e){  // 文字列として格納した配列を1文字ずつ数値に変換
      return Number(e);
    }); 
    if (NumResult[5] >= 5) {  // 小数点第四位の四捨五入の処理
      NumResult[4] += 1;
    };
    if (bats && hits) {  // 計算結果の出力。入力が何も無ければ実行されない
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

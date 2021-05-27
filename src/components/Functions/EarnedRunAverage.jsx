import { useCallback, useState } from 'react';
import { Headline } from 'src/components/Headline';
import styles from "src/components/Functions/Functions.module.css";

export function EarnedRunAverage() {
  const [ERA, setERA] = useState("防御率0.00");
  
  const getAvarage = useCallback(() => {
    function getNumResult() {  
      const EarnedRun = document.getElementById('EarnedRun').value;  // 自責点取得
      const PitchInnings = document.getElementById('PitchInnings').value;  // 投球回数取得
      const avarage = EarnedRun*9/PitchInnings;  // 計算
      const res = Math.round(avarage * 100)/100;  // 四捨五入
      const SetResult = String(res);   // 結果を文字列に変換
      return SetResult
    }
    let NumResult = getNumResult() 
    if (NumResult.length === 5) { 
      setERA(`防御率${NumResult.slice(0, 5)}`);
    } else if (NumResult.length === 4) {
      setERA(`防御率${NumResult.slice(0, 4)}`);
    }
  }, []);

  return (
    // React.Fragment
    <> 
      <Headline  
        title="防御率" 
        description="防御率とは、その投手が9イニング（1試合）を投げたとしたら何点に抑えられるかを示す指標です。"
        formula="防御率 ＝ 自責点×9÷投球回数"
      />

      <div>
        <h3 className={styles.item}>自責点</h3>
        <input type="number" id="EarnedRun" className={styles.form}/>
      </div>

      <div>
        <h3 className={styles.item}>投球回数</h3>
        <p>1/3は0.33、2/3は0.66と入力してください</p>
        <input type="number" id="PitchInnings" className={styles.form}/>
      </div>

      <h3 className={styles.result}>{ERA}</h3>
      <button className={styles.button} onClick={getAvarage}>計算</button>
    </>
    // React.Fragment
  )
}
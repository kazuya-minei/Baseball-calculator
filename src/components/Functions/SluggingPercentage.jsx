import { useCallback, useState } from 'react';
import { Headline } from 'src/components/Headline';
import styles from "src/components/Functions/Functions.module.css";

export function SluggingPercentage() {
  const [SLP, setSLP] = useState("長打率 0.000");
  
  const getSLP = useCallback(() => {
    function getNumResult() {  
      const One = Number(document.getElementById('one').value); 
      const Two = Number(document.getElementById('two').value*2);
      const Three = Number(document.getElementById('three').value*3); 
      const HomeRun = Number(document.getElementById('homeRun').value*4);
      const Bats = document.getElementById('bats').value; 
      const avarage = (One+Two+Three+HomeRun)/Bats 
      const res = Math.round(avarage * 1000)/1000;
      const SetResult = String(res);
      return SetResult
    }
    let NumResult = getNumResult() 
    setSLP(`長打率${NumResult.slice(0, 5)}`);
  }, []);

  return (
    <> 
      <Headline  
        title="長打率" 
        description="長打率とは、その打者の1打数あたりの塁打数の期待値（平均値）を表す指標です。"
        formula="長打率 ＝ 塁打 ÷ 打数"
      />

      <div>
        <h3 className={styles.item}>一塁打数</h3>
        <input type="number" id="one" className={styles.form}/>
      </div>

      <div>
        <h3 className={styles.item}>二塁打数</h3>
        <input type="number" id="two" className={styles.form}/>
      </div>

      <div>
        <h3 className={styles.item}>三塁打数</h3>
        <input type="number" id="three" className={styles.form}/>
      </div>

      <div>
        <h3 className={styles.item}>本塁打数</h3>
        <input type="number" id="homeRun" className={styles.form}/>
      </div>

      <div>
        <h3 className={styles.item}>打席数</h3>
        <p></p>
        <input type="number" id="bats" className={styles.form}/>
      </div>

      <h3 className={styles.result}>{SLP}</h3>
      <button className={styles.button} onClick={getSLP}>計算</button>
    </>
  )
}
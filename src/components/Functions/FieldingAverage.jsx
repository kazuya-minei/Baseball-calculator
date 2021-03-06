import { useCallback, useState } from 'react';
import { Headline } from 'src/components/Headline';
import { ResultButton } from '../ResultButton';
import { Forms } from '../Forms';

export function FieldingAverage() {
  const [FA, setFA] = useState("守備率0.000");
  
  const getFAvarage = useCallback(() => {
    function getNumResult() {  
      // 足し算引き算は数値に変換する
      const PutOuts = Number(document.getElementById('putOuts').value);  // 刺殺数
      const Assists = Number(document.getElementById('assists').value);  // 捕殺数
      const FauxPas = Number(document.getElementById('fauxpas').value);  // エラー数
      const avarage = (PutOuts+Assists)/(PutOuts+Assists+FauxPas);// 計算
      const res = Math.round(avarage * 1000)/1000;  // 四捨五入
      const SetResult = String(res);   // 結果を文字列に変換
      return String(SetResult);
    }
    let NumResult = getNumResult(); 
    if (NumResult.length === 5) {
      setFA(`守備率${NumResult.slice(0, 5)}`)
    } else if (NumResult.length === 4) {
      setFA(`守備率${NumResult.slice(0, 4)}`)
    } else if (NumResult.length === 3) {
      setFA(`守備率${NumResult.slice(0, 3)}`)
    }
  }, []);

  return (
    // React.Fragment
    <> 
      <Headline  
        title="守備率" 
        description="守備率とは、守備機会(アウトに関与した機会)、すなわち刺殺、補殺、失策の合計のうち、失策をしなかった割合を表します。"
        formula="守備率 ＝ （刺殺＋補殺）÷（刺殺＋補殺＋失策）"
      />

      <Forms FORMS={[
        {
          formTitle: "刺殺数",
          id: "putOuts"
        },
        {
          formTitle: "捕殺数",
          id: "assists"
        }, 
        {
          formTitle: "失策数",
          id: "fauxpas"
        }
      ]}/>

      <ResultButton result={FA} functiontype={getFAvarage}/>
    </>
    // React.Fragment
  )
}
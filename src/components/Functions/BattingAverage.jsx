import { useCallback, useState } from 'react';
import { Headline } from 'src/components/Headline';
import { ResultButton } from '../ResultButton';
import { Forms } from '../Forms';

export function BattingAvarage() {
  let [BA, setBA] = useState("打率 0割0分0厘");
  
  const getBAvarage = useCallback(() => {
    const bats = document.getElementById('bats').value;  // 打席数
    const hits = document.getElementById('hits').value;  // 安打数
    const avarage = hits/bats;  // 計算
    const res = Math.round(avarage * 1000)/1000;  // 四捨五入
    const NumResult = String(res); // 文字列変換
    if (NumResult.slice(0, 1) === "1") {
      setBA(`10割打者!? 首位打者は君だ!`);
    } else if (NumResult.length <= 3) {
      // 2文字目から初めて、最初から3文字目までを抜き出す
      setBA(`打率 ${NumResult.slice(2, 3)} 割`)
    } else if (NumResult.length <= 4) {
      setBA(`打率 ${NumResult.slice(2, 3)}割${NumResult.slice(3, 4)}分 `)
    } else {
      setBA(`打率 ${NumResult.slice(2, 3)}割${NumResult.slice(3, 4)}分${NumResult.slice(4, 5)}厘`)
    }
  }, []);

  return (
    // React.Fragment
    <> 
      <Headline  
        title="打率" 
        description="打席数から四死球、犠打、犠飛を除いた打数のうち、安打の割合を表します。"
        formula="打率 ＝ 安打数÷打数"
      />

      <Forms FORMS={[
        {
          formTitle: "打席数",
          id: "bats"
        },
        {
          formTitle: "安打数",
          id: "hits"
        }
      ]}/>

      <ResultButton result={BA} functiontype={getBAvarage}/>
    </>
    // React.Fragment
  )
}

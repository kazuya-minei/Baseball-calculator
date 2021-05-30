import '../styles/globals.css'
import { useFunctionChanger } from 'src/hooks/ChangeFunction';

function MyApp({ Component, pageProps }) {
  const FuncChanger = useFunctionChanger();  // フックス
  // const {isFunction, functionChanger} = useFunctionChanger();

  return <Component {...pageProps} {...FuncChanger} />
//  return <Component {...pageProps}  isFunction={isFunction} functionChanger={functionChanger}/>
}                          //props.isFunctionみたいに使える。でもめちゃくちゃ長くなるからスプレッド構文がおすすめ

export default MyApp

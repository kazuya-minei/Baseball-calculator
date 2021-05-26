import { useState } from 'react';
import { BattingAvarage } from 'src/components/Functions/BattingAverage';
import { EarnedRunAverage } from 'src/components/Functions/EarnedRunAverage';

export const useFunctionChanger = () => {
  const [isFunction, setIsFunction] = useState(<BattingAvarage />);

  function changeFunction(type) {
    if (type == "BA") {
      setIsFunction(<BattingAvarage />);
    } else if (type == "ERA") {
      setIsFunction(<EarnedRunAverage />);
    }
  };

  return { isFunction, changeFunction };
};

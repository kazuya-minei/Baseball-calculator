import { useState } from 'react';
import { BattingAvarage } from 'src/components/Functions/BattingAverage';
import { EarnedRunAverage } from 'src/components/Functions/EarnedRunAverage';
import { FieldingAverage } from 'src/components/Functions/FieldingAverage';
import { SluggingPercentage } from 'src/components/Functions/SluggingPercentage';

export const useFunctionChanger = () => {
  const [isFunction, setIsFunction] = useState(<BattingAvarage />);

  function changeFunction(type) {
    if (type == "BA") {
      setIsFunction(<BattingAvarage />);
    } else if (type == "ERA") {
      setIsFunction(<EarnedRunAverage />);
    } else if (type == "FA") {
      setIsFunction(<FieldingAverage />);
    } else if (type == "SLP") {
      setIsFunction(<SluggingPercentage />);
    }
  };

  return { isFunction, changeFunction };
};

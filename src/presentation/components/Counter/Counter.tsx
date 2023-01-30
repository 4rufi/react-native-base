import React from 'react';
import { useDispatch } from 'react-redux';
import useCounterStoreSelector from '../../../infrastructure/hooks/useCounterStore';
import {
  decrement,
  increment
} from '../../../domain/store/states/counterReducer';

import * as Style from './style';

const Counter = () => {
  const counterValue = useCounterStoreSelector().value;
  const dispatch = useDispatch();

  const onPressIncrement = () => {
    dispatch(increment());
  };

  const onClickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Style.ViewCounter>
      <Style.TitleText>Counter</Style.TitleText>
      <Style.CounterText>{counterValue}</Style.CounterText>

      <Style.ButtonContainer>
        <Style.IncrementButton onPress={onPressIncrement}>
          <Style.IncrementTextButton>Increment</Style.IncrementTextButton>
        </Style.IncrementButton>
      </Style.ButtonContainer>

      <Style.ButtonContainer>
        <Style.DecrementButton onPress={onClickDecrement}>
          <Style.DecrementTextButton>Decrement</Style.DecrementTextButton>
        </Style.DecrementButton>
      </Style.ButtonContainer>
    </Style.ViewCounter>
  );
};

export default Counter;

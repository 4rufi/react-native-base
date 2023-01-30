import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Style from './style';
import { StackNavigation } from '../../../infrastructure/router';

export const Button = () => {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <Style.ButtonContainer>
      <Style.IncrementButton onPress={() => navigate('Counter')}>
        <Style.IncrementTextButton>GO TO Counter</Style.IncrementTextButton>
      </Style.IncrementButton>
    </Style.ButtonContainer>
  );
};

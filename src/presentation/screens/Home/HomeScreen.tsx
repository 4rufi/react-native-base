import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button/Button';
import Counter from '../../components/Counter/Counter';

export const HomeScreen = () => {
  return (
    <View>
      <Counter />
      <Button />
    </View>
  );
};

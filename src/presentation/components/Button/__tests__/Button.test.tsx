// Unit Test Code
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../Button';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn()
}));

describe('Button component', () => {
  it('should render correctly', () => {
    const navigation = { navigate: jest.fn() };

    (useNavigation as jest.Mock).mockReturnValue(navigation);

    const { getByText } = render(<Button />);

    expect(getByText(/GO TO Counter/)).toBeTruthy();
  });

  it('should call navigate when pressed', () => {
    const navigation = { navigate: jest.fn() };

    (useNavigation as jest.Mock).mockReturnValue(navigation);

    const { getByText } = render(<Button />);

    fireEvent.press(getByText(/GO TO Counter/));

    expect(navigation.navigate).toHaveBeenCalledWith('Counter');
  });
});

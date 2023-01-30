import styled from 'styled-components/native';

export const ViewCounter = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const CounterText = styled.Text`
  font-size: 62px;
  color: green;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  margin: 10px;
  width: 80%;
`;

export const IncrementButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  border-radius: 20px;
`;

export const IncrementTextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const DecrementButton = styled.TouchableOpacity`
  background-color: #29938d;
  padding: 10px;
  border-radius: 20px;
`;

export const DecrementTextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

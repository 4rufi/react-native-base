import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './states';
import { CounterState } from './states/counterReducer';

export interface AppStore {
  counter: CounterState;
}

export default configureStore<AppStore>({
  reducer: {
    counter: counterReducer
  },
  devTools: true
});

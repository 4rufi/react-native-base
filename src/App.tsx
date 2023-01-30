import React from 'react';
import { Provider } from 'react-redux';

import { store } from './domain/store';
import { AppRouter } from './infrastructure/router';

const AppConfig = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default AppConfig;

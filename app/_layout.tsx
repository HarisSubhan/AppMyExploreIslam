import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store/store';
import AppNavigator from '@/navigation';

export default function RootLayout() {
  return (
    <Provider store={store}>
      
        <AppNavigator />
      
    </Provider>
  );
}

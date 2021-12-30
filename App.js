import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as MainProvider } from './src/context/MainContext';
import MainApp from './src/MainApp';


const App = () => {
  return (
    <NavigationContainer>
      <MainProvider>
        <MainApp />
      </MainProvider>
    </NavigationContainer>
  );
};

export default App;

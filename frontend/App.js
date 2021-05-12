import React from 'react';
import {ContextUserProvider} from './src/context/UserContext';
import Routes from './src/Routes';
import AppLoading from 'expo-app-loading'

export default function App() {

  return( 
    <>
    <ContextUserProvider>
      <Routes/>
    </ContextUserProvider>
    </>
   );
}

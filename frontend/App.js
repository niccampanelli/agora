import React from 'react';
import {ContextUserProvider} from './src/context/UserContext';
import Routes from './src/Routes';

export default function App() {
  return( 
    <>
    <ContextUserProvider>
      <Routes/>
    </ContextUserProvider>
    </>
   );
}

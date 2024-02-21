import React from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';
import Dashboard from './screens/afterLogin/Dashboard';
import BottomNavigationContainer from './navigators/BottomNavigationContainer';

export default function App() {
  return (
    <BottomNavigationContainer/>
  );
}
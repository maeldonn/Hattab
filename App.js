import React from 'react';
import {} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './Navigation/Navigation';

export default function App() {
  SplashScreen.hide();
  return <Navigation />;
}

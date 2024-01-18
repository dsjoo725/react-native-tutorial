import React from 'react';
import {View} from 'react-native';
import LotsOfGreetings from './components/tutorials/HelloProps';
import {HelloWorld} from './components/tutorials/HelloWorld';

export const App = () => {
  return (
    <View>
      <LotsOfGreetings />
      <HelloWorld />
    </View>
  );
};

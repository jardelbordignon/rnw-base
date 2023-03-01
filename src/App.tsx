import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function App(): JSX.Element {
  return (
    <View style={s.wrapper}>
      <Text style={s.title}>App</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blueviolet',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#222222',
  },
});

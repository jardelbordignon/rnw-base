import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

export function App(): JSX.Element {
  return (
    <View style={tw`flex-1 justify-center items-center bg-blue-500`}>
      <Text style={tw`font-bold text-4xl text-white`}>App</Text>
    </View>
  )
}

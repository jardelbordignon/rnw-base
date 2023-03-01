import { Text, View } from 'react-native'
import tw from 'twrnc'

import { Outlet } from 'src/router'

export function Main(): JSX.Element {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`font-bold text-4xl text-gray-900`}>Main</Text>
      <Outlet />
    </View>
  )
}

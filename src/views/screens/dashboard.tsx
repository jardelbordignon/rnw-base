import { Text, View } from 'react-native'
import tw from 'twrnc'

import { Link } from 'src/router'

export function Dashboard(): JSX.Element {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`font-bold text-4xl text-gray-900`}>Dashboard</Text>
      <Link to="home">
        <Text style={tw`font-bold text-lg text-blue-400`}>Go to home</Text>
      </Link>
    </View>
  )
}

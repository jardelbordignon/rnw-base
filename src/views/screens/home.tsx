import { Pressable, Text, View } from 'react-native'
import { useRecoilState, useSetRecoilState } from 'recoil'
import tw from 'twrnc'

import { auth, counter } from 'src/atoms'
import { Link } from 'src/router'

export function Home(): JSX.Element {
  const [counterValue, setCounter] = useRecoilState(counter)
  const setAuth = useSetRecoilState(auth)

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`font-bold text-4xl text-gray-900`}>Home</Text>
      <Link to="dashboard">
        <Text style={tw`font-bold text-lg text-blue-400`}>Go to dashboard</Text>
      </Link>
      <Pressable
        onPress={() =>
          setAuth({ email: 'john@email.com', permissions: [''], roles: ['admin'] })
        }>
        <Text>Set Auth</Text>
      </Pressable>
      <Pressable onPress={() => setCounter(counterValue + 1)}>
        <Text>Set Counter</Text>
      </Pressable>
    </View>
  )
}

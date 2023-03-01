import { Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import tw from 'twrnc'

import { auth, counter } from 'src/atoms'
import { Outlet } from 'src/router'

export function Main(): JSX.Element {
  const counterValue = useRecoilValue(counter)
  const { email, roles } = useRecoilValue(auth)

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`font-bold text-4xl text-gray-900`}>Main</Text>
      <Text style={tw`font-bold text-xl text-gray-900`}>Auth {email}</Text>
      {roles && roles.includes('admin') && (
        <Text style={tw`font-bold text-xl text-gray-900`}>Admin</Text>
      )}
      <Text style={tw`font-bold text-xl text-gray-900`}>Counter {counterValue}</Text>
      <Outlet />
    </View>
  )
}

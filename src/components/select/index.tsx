/*
  const [localeName, setLocaleName] = useState('pt')

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
    { label: 'Português', value: 'pt' },
  ]

  <Select
    label="Selecione"
    data={languages}
    selectedItem={
      localeName ? languages.find(({ value }) => value === localeName) : undefined
    }
    onSelect={({ value }) => setLocaleName(value as LocaleName)}
  />
*/
import { useState } from 'react'
import { FlatList, ListRenderItemInfo, Pressable, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import tw from 'twrnc'

type Item = {
  label: string
  value: string
}

type Props = {
  data: Item[]
  label: string
  minWidth?: number
  onSelect: (item: Item) => void
  selectedItem?: Item
}

export function Select({
  data,
  label,
  onSelect,
  selectedItem = undefined,
  minWidth = 130,
}: Props): JSX.Element {
  const [listVisible, setListVisible] = useState(false)

  const handleSelect = (item: Item) => {
    setListVisible(false)
    onSelect(item)
  }

  const renderItem = ({ item }: ListRenderItemInfo<Item>) => (
    <Pressable style={tw`py-1`} onPress={() => handleSelect(item)}>
      <Text style={tw`text-lg text-gray-800`}>{item.label}</Text>
    </Pressable>
  )

  return (
    <View style={tw`justify-center items-center relative z-10`}>
      <Pressable
        style={[tw`flex-row justify-between items-center`, { minWidth }]}
        onPress={() => setListVisible(true)}>
        <Text style={tw`text-lg text-gray-800`}>
          {selectedItem ? selectedItem.label : label}
        </Text>
        <Icons name="chevron-down" size={20} />
      </Pressable>

      {listVisible ? (
        <FlatList
          style={tw`absolute rounded-md top-0 right-0 left-0 px-4 py-3 bg-gray-200`}
          data={data}
          keyExtractor={item => item.label}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  )
}

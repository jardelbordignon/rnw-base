import { atom } from 'recoil'
import { persistentAtom } from 'recoil-persistence/react-native'

export const counter = atom({
  default: 0,
  key: '@atom.counter',
})

export const auth = persistentAtom({
  default: {
    email: '',
    permissions: [''],
    roles: [''],
  },
  key: '@atom.auth',
})

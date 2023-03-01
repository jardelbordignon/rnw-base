import { RecoilRoot } from 'recoil'

import Routes from 'src/router/routes'

export function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  )
}

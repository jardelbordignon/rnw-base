import { Dashboard } from 'src/views/screens/dashboard'
import { Home } from 'src/views/screens/home'
import { Main } from 'src/views/templates/main'

import { Navigate, Route, Router, Routes } from '.'

export default (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </Router>
  )
}

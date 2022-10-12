import { useState } from 'react'
import './App.css'
import Layout from './components/layout'
import { AppRouter } from './router'
import { getLocalUser } from './utils/localStorageManagment'

const App = () => {
  const [user, setUser] = useState(() => getLocalUser())

  return (
    <Layout user={user} setUser={setUser}>
      <AppRouter user={user} setUser={setUser} />
    </Layout>
  )
}

export default App

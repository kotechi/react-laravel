import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import UserList from './components/user'
import BarangList from './components/barang'

function App() {
  const [count, setCount] = useState(0) 
  return (
    <>
    
    <div className='flex px-10 items-center justify-between w-screen h-screen font-bold font-medium '>
      <UserList />
      <BarangList />
    </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import UserList from './components/user'

function App() {
  const [count, setCount] = useState(0) 
  return (
    <>
    <UserList />
    <div className='flex items-center justify-center w-screen h-screen font-bold font-medium '>react + vite + tailwindcss</div>
    </>
  )
}

export default App

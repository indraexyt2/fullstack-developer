import Header from './components/header'
import Menu from './components/menu'
import { useEffect, useState } from 'react'
import './index.css'
import 'preline'
import menuData from './menu-makanan.json';

function App() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu(menuData)
  }, [])

  return (
    <>
      <Header />
      <div className="container xl:ms-32 lg:ms-24 mt-2">
        <h2 className='font-semibold text-xl'>Menu Kami</h2>
      </div>
      
      <div className='flex sm:flex-row sm:flex-wrap flex-col justify-center'>
      {menu.map(item => (
          <Menu 
            key={item.id} 
            FoodObj = {item} />
      ))}
      </div>
    </>
  )
}

export default App

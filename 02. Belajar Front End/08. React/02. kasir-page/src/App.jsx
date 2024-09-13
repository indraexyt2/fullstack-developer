import { useState } from 'react'
import './index.css'
import 'flowbite'
import LoginPage from './components/register-page'
import Navbar from './components/navbar'
import LoginPage2 from './components/login-page-2'
import Hero from './components/home/hero'
import Fitur from './components/home/fitur'
import FiturData from './fitur.json'

function App() {

const FiturDataJSON = FiturData;
console.log(FiturDataJSON)
 
  return (
    <>
      <Navbar />
      <Hero />
      <div className="p-10">
        <h1 className="font-bold text-3xl text-slate-700 text-center">Fitur Yang Mengintegrasikan Seluruh Aspek Bisnis Anda</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-5 p-5 md:p-0'>
        {FiturDataJSON.map(fitur => (
          <Fitur 
            key={fitur.id} 
            src={fitur.image} 
            title={fitur.title} 
            desctiption={fitur.description} />
        ))}
      </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
import './index.css'

function App() {

  return (
    <>
      <div className='flex flex-col w-full min-h-screen bg-sky-900 item-center justify-center'>
        <div className='flex flex-row gap-8 flex-wrap justify-center mt-16 sm:mt-0 '>
          <div className='flex flex-col min-h-full max-w-sm justify-between bg-sky-600 rounded-xl overflow-hidden shadow-xl'>
            <div className='relative w-72'>
              <img 
                className='w-full h-60 object-cover shadow-'
                src="https://storage.prompt-hunt.workers.dev/e0ba375a-a2d4-4043-a031-9f7403f090ea" 
                alt="" />
              <h2 className='absolute font-bold text-xl inset-y-40 ps-5 text-white'>Midnight</h2>
              <h2 className='absolute font-semibold text-xs inset-y-48 ps-5 text-white'>Engeneering</h2>
              <p className='px-5 pt-5 text-white leading-tight'>Hi, I’m <b>Midnight</b>, a JavaScript developer who thrives on learning and exploring new technologies</p>
              <p className='px-5 pt-5 text-white leading-tight pb-5'>I love diving into innovative solutions and participating in coding challenges. Outside of work, I’m always on the lookout for new trends and enjoy sharing knowledge with the tech community.</p>
            </div>
            <div className='pb-5 px-5 w-72 text-xs space-x-2 text-white'>
              <span className='bg-slate-400 bg-opacity-75 rounded-full ps-1 pe-2 py-0.5'>🚀 JavaScript</span>
              <span className='bg-slate-400 bg-opacity-75 rounded-full ps-1 pe-2 py-0.5'>⚙️ JavaScript</span>
            </div>
          </div>
          <div className='flex flex-col min-h-full max-w-sm justify-between bg-sky-600 rounded-xl overflow-hidden'>
            <div className='relative w-72'>
              <img 
                className='w-full h-60 object-cover'
                src="https://img.freepik.com/premium-photo/there-is-black-cat-wearing-hoodie-dark-room-generative-ai_958078-24991.jpg" 
                alt="" />
              <h2 className='absolute font-bold text-xl inset-y-40 ps-5 text-white'>Midnight</h2>
              <h2 className='absolute font-semibold text-xs inset-y-48 ps-5 text-white'>Engeneering</h2>
              <p className='px-5 pt-5 text-white leading-tight'>Hi, I’m <b>Midnight</b>, a JavaScript developer who thrives on learning and exploring new technologies</p>
              <p className='px-5 pt-5 text-white leading-tight pb-5'>I love diving into innovative solutions and participating in coding challenges..</p>
            </div>
            
            <div className='pb-5 px-5 w-72 text-xs space-x-2 text-white'>
              <span className='bg-slate-400 bg-opacity-75 rounded-full ps-1 pe-2 py-0.5'>🚀 JavaScript</span>
              <span className='bg-slate-400 bg-opacity-75 rounded-full ps-1 pe-2 py-0.5'>⚙️ JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

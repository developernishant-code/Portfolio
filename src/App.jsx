import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AboutSection from './components/About'


const App = () => {
  return (
    <div className='bg-[#171d32]  h-auto w-full overflow-hidden'>
      <div className='max-w-[1480px] mx-auto'>
        <Header />
        <Home />
        <AboutSection />
      </div>

    </div>
  )
}

export default App
import React from 'react'
import Sidebar from '../header/Sidebar'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <main className='main-container'>
        {children}
      </main>
    </div>
  )
}

export default Layout

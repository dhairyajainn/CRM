import React from 'react'
import Sidebar from './SideBar'

const Layout = ({children}) => {
  return (
    <div className='flex '> 
        <Sidebar />
        <div>{children}</div>
    </div>
  )
}

export default Layout
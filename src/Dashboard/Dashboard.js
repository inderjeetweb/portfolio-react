import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import './dashboard.scss';
import { Link, Outlet } from 'react-router-dom'
// import database from '../firebase';


const Dashboard = () => {
  return (
    <>
      <div className='bgWhite'>
        <div className='container-fluid'>
            <div className='row'>
            
                <div className='col-4 col-sm-2'>
                    <div className='row'>
                      <Sidebar></Sidebar>
                    </div>
                </div>
                <div className='col-4 col-sm-10'>
                    <div className='row'>
                      <Header></Header>
                      <div className='bodyContent'>
                            <Outlet />
                      </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
          </div>
      </div>

   
    </>
  )
}

export default Dashboard

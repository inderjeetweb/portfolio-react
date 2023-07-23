import React from 'react'
import { db } from "../firebaseConfig";
import { useState, useEffect } from 'react';
import { Contact } from './Contact';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

const Profile = () => {

  return (
    <>
      <div className="background-color-layer" style={{ backgroundImage: `url('/images/cover.jpg')` }}></div>
      <main className="content-wrapper">

        <Header />

        <div className="containerCustom">
          <div className="row">
            <div className="col-xs-12">


              

              <Outlet />

            </div>
          </div>
        </div>

      </main>

    </>
  )
}

export default Profile
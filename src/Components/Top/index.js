import React from 'react'
import { Link } from 'react-router-dom'

import './top.css'

export default function TopBar () {
  return(
   <header className='top'>
    <div className='topContent'> 
      <Link className='topBox' to='/'>
        <img className='topImg' src='https://cdn.pixabay.com/photo/2020/08/26/16/52/tooth-5520076_1280.png'/>
        <p className='topName'> Dentes Saudáveis</p>
        </Link>

        <nav className='topLinks'>
          <Link className='topLink' to='/'>Página Inicial</Link>
          <Link className='topLink' to='/contact'>Contato</Link>
        </nav>
    </div>
   </header>
    )
}
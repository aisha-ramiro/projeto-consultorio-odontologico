import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

export default function PagesRoute () {

    return(

    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    )
}
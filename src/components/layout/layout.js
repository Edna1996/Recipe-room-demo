import React, { useState} from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = ({children}) => {
    <>
        <Navbar />
        {children}
        <Footer />

    </>
}

export default MainLayout;
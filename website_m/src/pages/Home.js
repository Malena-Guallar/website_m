import React from 'react';
import Nav from '../components/Nav';
import { motion as m } from "framer-motion";

const Home = () => {

    return (

        <body className="h-screen bg-gradient-to-tr from-mint to-light_blue">

            <Nav />
            <m.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, ease: "easeOut"}}>


        <div className='absolute top-80 left-80 text-3xl'>
            <h1>welcome</h1> 
            <p className='text-xs'>to my website</p>   
        </div>
        </m.div>


        </body>
    )

}

export default Home ; 
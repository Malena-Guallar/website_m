import React from "react";
import Nav from "../components/Nav";
import { motion as m } from "framer-motion" 

const Bio = () => {

    return (


        <body className="h-screen bg-gradient-to-br from-fuschia to-mauve">


            <Nav />

            <m.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, ease: "easeOut"}}>
       
                <div className='absolute top-80 left-80'>
                    <h1 className="text-3xl pb-6">about me</h1>
                    <p className="text-sm mr-32 text-justify">D’abord organisatrice de fêtes libres au sein du collectif Astral, c’est justement là qu’elle a pu trouver la liberté de jouer ce qu’elle aimait. Ayant commencé à pratiquer en 2016 essentiellement avec de la techno, et parce qu’un style évolue sans cesse, aujourd’hui c’est techno toujours, break, acid, mais demain peut-être dnb ou reggaeton, qui sait. Dans tous les cas elle aime ne pas savoir ce qu’il va se passer à l’avance, pour ressentir le frisson de la vie sans doute. 
                        On ne compte plus les fêtes libres dans lesquelles elle a pu se produire. Pour ce qui est des évènements plus classiques, on a pu la retrouver à l’International, au 9B, et en warehouse. 
                        Elle est résidente du collectif Ultracks.</p>
                </div>
            </m.div>

        </body>
    )

}

export default Bio ; 
import React from "react";
import Nav from "./Nav";
import { motion as m } from "framer-motion" ;


const Listen = () => {

    return (

        <body className="h-screen bg-gradient-to-bl from-orange to-yellow">


            <Nav />
            <m.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, ease: "easeOut"}}>
                <div className='absolute top-80 left-80 text-3xl'>
                    <h1>listen to my sets</h1> 
                </div>
                <div>

                <iframe className="absolute bottom-36 left-80 w-7/12" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1432701199&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
    

            </m.div>
        </body>
    )


}

export default Listen ;

{/* <iframe width="100%" height="166" scrolling="no" frameborder="no" 
allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1432701199&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
<div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
<a href="https://soundcloud.com/radiobeguin" title="radio béguin" target="_blank" style="color: #cccccc; text-decoration: none;">radio béguin</a> · 
<a href="https://soundcloud.com/radiobeguin/enpf-bazaar-charel-invite-malena-260123" title="ENPF Bazaar - Charel invite Malena (26.01.23)" target="_blank" style="color: #cccccc; text-decoration: none;">ENPF Bazaar - Charel invite Malena (26.01.23)</a></div> */}
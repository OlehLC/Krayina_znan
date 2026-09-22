"use client";


import {motion} from "framer-motion";


export default function FadeIn({

                                   children,
                                   delay=0

                               }:{

    children:React.ReactNode,
    delay?:number

}){


    return (

        <motion.div

            initial={{
                opacity:0,
                y:50
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true,
                amount:.2
            }}

            transition={{

                duration:.7,
                delay

            }}

        >

            {children}

        </motion.div>


    )

}
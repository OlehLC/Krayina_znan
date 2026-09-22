"use client";


import {motion} from "framer-motion";


export default function MotionCard({

                                       children

                                   }:{
    children:React.ReactNode
}){


    return (

        <motion.div

            whileHover={{

                y:-8,
                scale:1.02

            }}

            transition={{

                type:"spring",
                stiffness:250

            }}

            className="
bg-white
rounded-[28px]
border
border-gray-100
shadow-sm
hover:shadow-xl
transition
"

        >

            {children}

        </motion.div>

    )

}
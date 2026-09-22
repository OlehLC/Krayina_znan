"use client";


import { useState } from "react";

import { Menu, X } from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Header(){


    const [open,setOpen] = useState(false);



    return (

        <header

            className="
fixed
top-0
left-0
right-0
z-50
px-4
pt-4
"

        >


            <div

                className="
container
"

            >


                <motion.div

                    initial={{
                        y:-40,
                        opacity:0
                    }}

                    animate={{
                        y:0,
                        opacity:1
                    }}

                    transition={{
                        duration:.5
                    }}

                    className="
bg-white/90
backdrop-blur-xl
border
border-gray-100
rounded-[24px]
shadow-lg
shadow-blue-100/30
px-5
py-3
flex
items-center
justify-between
"

                >



                    <Image

                        src="/images/logo.PNG"

                        width={50}

                        height={50}

                        alt="Країна знань"

                    />

                    <a

                        href="#"

                        className="
flex
items-center
gap-3
font-extrabold
text-blue-600
text-lg
"

                    >
<span >

Країна знань

</span>

                    </a>





                    {/* Desktop menu */}

                    <nav

                        className="
hidden
md:flex
items-center
gap-8
text-sm
font-semibold
text-gray-600
"

                    >


                        <a

                            href="#services"

                            className="
hover:text-blue-600
transition
"

                        >

                            Напрями

                        </a>



                        <a

                            href="#why"

                            className="
hover:text-blue-600
transition
"

                        >

                            Чому ми

                        </a>



                        <a

                            href="#how"

                            className="
hover:text-blue-600
transition
"

                        >

                            Як почати

                        </a>



                        <a

                            href="#contacts"

                            className="
hover:text-blue-600
transition
"

                        >

                            Контакти

                        </a>


                    </nav>





                    {/* CTA */}

                    <a

                        href="tel:+380992738763"

                        className="
hidden
md:flex
bg-blue-600
text-white
px-6
py-3
rounded-2xl
font-bold
hover:bg-blue-700
transition
hover:-translate-y-1
"

                    >

                        Записатися

                    </a>





                    {/* Mobile button */}

                    <button

                        onClick={()=>setOpen(!open)}

                        className="
md:hidden
w-11
h-11
rounded-2xl
bg-blue-50
text-blue-600
flex
items-center
justify-center
"

                    >

                        {

                            open ?

                                <X/>

                                :

                                <Menu/>

                        }


                    </button>



                </motion.div>





                {/* Mobile menu */}

                {

                    open && (


                        <motion.div

                            initial={{

                                opacity:0,
                                y:-10

                            }}

                            animate={{

                                opacity:1,
                                y:0

                            }}

                            className="
mt-3
bg-white
rounded-3xl
shadow-xl
p-6
md:hidden
"

                        >


                            <nav

                                className="
flex
flex-col
gap-5
font-semibold
"

                            >


                                <a

                                    onClick={()=>setOpen(false)}

                                    href="#services"

                                >

                                    Напрями

                                </a>


                                <a

                                    onClick={()=>setOpen(false)}

                                    href="#why"

                                >

                                    Чому ми

                                </a>


                                <a

                                    onClick={()=>setOpen(false)}

                                    href="#how"

                                >

                                    Як почати

                                </a>


                                <a

                                    onClick={()=>setOpen(false)}

                                    href="#contacts"

                                >

                                    Контакти

                                </a>



                                <a

                                    href="tel:+380992738763"

                                    className="
bg-blue-600
text-white
rounded-2xl
py-4
text-center
"

                                >

                                    📞 099 273 87 63

                                </a>


                            </nav>


                        </motion.div>


                    )

                }


            </div>


        </header>

    )

}
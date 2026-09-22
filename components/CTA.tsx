"use client";


import { motion } from "framer-motion";

import FadeIn from "@/components/ui/FadeIn";

import Button from "@/components/ui/Button";


export default function CTA(){


    return (

        <section

            id="contacts"

            className="
py-24
"

        >


            <div className="container">


                <FadeIn>


                    <motion.div

                        whileHover={{
                            scale:1.01
                        }}

                        transition={{
                            duration:.3
                        }}

                        className="
relative
overflow-hidden
rounded-[40px]
bg-yellow-400
p-10
md:p-16
"

                    >


                        {/* декоративне коло */}

                        <div

                            className="
absolute
right-[-80px]
top-[-80px]
w-[250px]
h-[250px]
rounded-full
bg-blue-600
opacity-20
"

                        />



                        <div

                            className="
relative
z-10
max-w-3xl
"

                        >


                            <h2

                                className="
text-4xl
md:text-6xl
font-extrabold
leading-tight
tracking-tight
"

                            >

                                Допоможемо дитині
                                навчатися впевненіше 💙

                            </h2>



                            <p

                                className="
mt-6
text-lg
md:text-xl
text-black/70
max-w-xl
"

                            >

                                Запишіться на пробне заняття.
                                Ми підберемо напрям,
                                формат навчання та викладача
                                саме для вашої дитини.

                            </p>



                            <div className="
mt-8
flex
flex-wrap
gap-4
">


                                <Button>

                                    📞 099 273 87 63

                                </Button>



                                <a

                                    href="tel:+380992738763"

                                    className="
inline-flex
items-center
justify-center
px-7
py-4
rounded-2xl
bg-white
text-blue-600
font-bold
border
border-blue-100
transition
hover:-translate-y-1
"

                                >

                                    Написати нам

                                </a>


                            </div>


                        </div>



                        {/* маленькі елементи */}


                        <motion.div

                            animate={{

                                rotate:[0,10,0],
                                y:[0,-10,0]

                            }}

                            transition={{

                                duration:4,
                                repeat:Infinity

                            }}

                            className="
absolute
right-10
bottom-10
bg-white
rounded-2xl
px-5
py-3
font-bold
shadow-lg
"

                        >

                            ⭐ Країна знань

                        </motion.div>


                    </motion.div>


                </FadeIn>


            </div>


        </section>

    )

}
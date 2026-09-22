"use client";


import Image from "next/image";

import {motion} from "framer-motion";

import Button from "@/components/ui/Button";


export default function Hero(){


    return (

        <section className="
pt-32
pb-20
overflow-hidden
">


            <div className="
container
grid
lg:grid-cols-2
gap-12
items-center
">


                <motion.div

                    initial={{
                        opacity:0,
                        x:-50
                    }}

                    animate={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:.8
                    }}

                >


                    <div className="
inline-flex
bg-yellow-100
px-5
py-2
rounded-full
font-bold
"

                    >

                        ⭐ Освітній центр у Полтаві

                    </div>



                    <h1 className="
mt-8
text-6xl
font-extrabold
leading-[.95]
tracking-tight
">


                        Навчання,

                        яке діти


                        <span className="
text-blue-600
block
">

хочуть

повертатися

</span>


                    </h1>



                    <p className="
mt-6
text-xl
text-gray-500
"

                    >

                        Підготовка до школи,
                        іноземні мови,
                        математика,
                        НМТ та індивідуальні заняття.

                    </p>



                    <div className="
mt-8
flex
gap-4
"

                    >

                        <Button>

                            Записатися на пробне заняття

                        </Button>


                    </div>


                </motion.div>





                <motion.div

                    initial={{
                        opacity:0,
                        scale:.8
                    }}

                    animate={{
                        opacity:1,
                        scale:1
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="
relative
"


                >


                    <Image

                        src="/images/hero.webp"

                        width={500}

                        height={400}

                        alt="Учень"

                        className="
rounded-[50px]
shadow-2xl
"

                    />



                    <div className="
absolute
left-5
bottom-5
bg-white
rounded-3xl
shadow-xl
px-6
py-4
font-bold
"

                    >

                        ⭐ 500+ учнів

                    </div>



                    <div className="
absolute
right-5
top-5
bg-yellow-400
rounded-3xl
px-5
py-4
font-bold
"

                    >

                        ABC ✏️

                    </div>



                </motion.div>


            </div>


        </section>

    )

}
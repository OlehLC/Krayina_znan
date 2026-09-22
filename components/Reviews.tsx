"use client";


import {Swiper,SwiperSlide} from "swiper/react";

import "swiper/css";


import FadeIn from "@/components/ui/FadeIn";


const reviews=[

    {
        name:"Олена",
        text:"Дитина із задоволенням ходить на заняття. Дуже подобається."
    },

    {
        name:"Марина",
        text:"Професійні викладачі, цікаві заняття та справжня підтримка."
    },

    {
        name:"Андрій",
        text:"Дякуємо за розвиток і теплу атмосферу."
    },

    {
        name:"Ірина",
        text:"Найкраще місце для розвитку дитини."
    }

];



export default function Reviews(){


    return (

        <section

            id="reviews"

            className="
py-24
"

        >


            <div className="
container mb-10
"


            >


                <FadeIn>


                    <h2 className="
text-5xl
font-extrabold
"

                    >

                        Що кажуть

                        <span className="
text-blue-600
">
<span> </span>
про нас

</span>

                    </h2>


                </FadeIn>



                <Swiper

                    className="mt-12 pb-10"

                    spaceBetween={25}

                    breakpoints={{

                        768:{
                            slidesPerView:2
                        },

                        1200:{
                            slidesPerView:4
                        }

                    }}

                >


                    {

                        reviews.map(item=>(


                            <SwiperSlide key={item.name}>


                                <div

                                    className="
bg-white
rounded-[35px]
p-7
shadow-lg
border
border-gray-100
h-[220px]
flex
flex-col
justify-between
hover:-translate-y-2
transition
"

                                >


                                    <div className="
text-yellow-400
text-xl
"

                                    >

                                        ★★★★★

                                    </div>



                                    <p className="
mt-5
text-gray-600
"

                                    >

                                        "{item.text}"

                                    </p>



                                    <div className="
mt-6
font-bold
"

                                    >

                                        {item.name}

                                    </div>


                                </div>


                            </SwiperSlide>


                        ))


                    }


                </Swiper>


            </div>


        </section>


    )

}
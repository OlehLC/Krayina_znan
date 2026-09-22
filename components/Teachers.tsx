"use client";

import Image from "next/image";

import FadeIn from "@/components/ui/FadeIn";


const teachers = [

    {
        name:"Дорошенко Світлана",
        subject:"Українська мова",
        image:"/images/gallery/11.webp"
    },

    {
        name:"Олійник Наталя",
        subject:"Логопед",
        image:"/images/gallery/456.webp"
    },

    {
        name:"Кус Антоніна",
        subject:"Англійська",
        image:"/images/gallery/33.webp"
    },

    {
        name:"Шило Людмила",
        subject:"Підготовка до школи",
        image:"/images/gallery/44.webp"
    },

    {
        name:"Мельник Софія",
        subject:"Англійська",
        image:"/images/gallery/5.webp"
    },

    {
        name:"Якименко Давід",
        subject:"Англійська",
        image:"/images/gallery/6.webp"
    }

];



export default function Teachers(){


    return (

        <section

            id="teachers"

            className="
py-24
bg-[#eef5ff]
"

        >


            <div className="container">


                <FadeIn>


                    <h2

                        className="
text-5xl
font-extrabold
"

                    >

                        Наші

                        <span

                            className="
text-blue-600
"

                        >

викладачі

</span>


                    </h2>



                    <p

                        className="
mt-4
text-gray-500
max-w-xl
"

                    >

                        Професіонали, які надихають,
                        підтримують та допомагають дітям
                        досягати результатів.

                    </p>


                </FadeIn>



                <div

                    className="
grid
grid-cols-2
lg:grid-cols-3
gap-6
mt-12
"

                >


                    {

                        teachers.map((teacher,index)=>(


                            <FadeIn

                                key={teacher.name}

                                delay={index * 0.1}

                            >


                                <div

                                    className="
bg-white
rounded-[35px]
overflow-hidden
shadow-sm
hover:shadow-xl
transition
hover:-translate-y-2
"

                                >


                                    <Image

                                        src={teacher.image}

                                        width={500}

                                        height={500}

                                        alt={teacher.name}

                                        className="
aspect-square
object-cover
"

                                    />



                                    <div

                                        className="
p-6
"

                                    >


                                        <h3

                                            className="
font-bold
text-xl
"

                                        >

                                            {teacher.name}

                                        </h3>



                                        <p

                                            className="
text-blue-600
mt-2
font-medium
"

                                        >

                                            {teacher.subject}

                                        </p>



                                    </div>


                                </div>


                            </FadeIn>


                        ))


                    }


                </div>


            </div>


        </section>

    )

}
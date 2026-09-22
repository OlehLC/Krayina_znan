import {benefits} from "@/data/benefits";

import FadeIn from "@/components/ui/FadeIn";

import MotionCard from "@/components/ui/MotionCard";


export default function Benefits(){


    return (

        <section

            id="why"

            className="
py-24
"

        >


            <div className="container">


                <FadeIn>


                    <h2 className="
text-5xl
font-extrabold
max-w-4xl
">

                        Чому батьки
                        обирають
                        Країну знань

                    </h2>


                    <p className="
mt-5
text-gray-500
text-lg
max-w-2xl
">

                        Для нас результат —
                        це не тільки оцінка,
                        а впевненість дитини.

                    </p>


                </FadeIn>



                <div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-5
mt-12
">


                    {

                        benefits.map((item,index)=>(


                            <FadeIn

                                key={item.number}

                                delay={index*.1}

                            >


                                <MotionCard>


                                    <div className="
p-7
">


                                        <div className="
text-4xl
font-extrabold
text-blue-600
">

                                            {item.number}

                                        </div>



                                        <h3 className="
mt-5
font-bold
text-xl
">

                                            {item.title}

                                        </h3>



                                        <p className="
mt-3
text-gray-500
text-sm
leading-relaxed
">

                                            {item.text}

                                        </p>


                                    </div>


                                </MotionCard>


                            </FadeIn>


                        ))


                    }


                </div>


            </div>


        </section>

    )

}
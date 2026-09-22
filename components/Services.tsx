import {services} from "@/data/services";

import FadeIn from "@/components/ui/FadeIn";

import MotionCard from "@/components/ui/MotionCard";


export default function Services(){


    return (

        <section

            id="services"

            className="
py-24
bg-[#eef5ff]
"

        >


            <div className="
container
">


                <FadeIn>


                    <h2 className="
text-5xl
font-extrabold
tracking-tight
max-w-3xl
">

                        Обирайте напрям,
                        який потрібен саме
                        вашій дитині

                    </h2>


                    <p className="
mt-5
text-gray-500
max-w-2xl
text-lg
">

                        Програма підбирається відповідно
                        до віку, цілей та рівня знань.

                    </p>


                </FadeIn>



                <div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
mt-12
">


                    {

                        services.map((item,index)=>(


                            <FadeIn

                                key={item.title}

                                delay={index*0.08}

                            >


                                <MotionCard>


                                    <div className="
p-8
">


                                        <div className="
w-14
h-14
rounded-2xl
bg-yellow-100
flex
items-center
justify-center
text-3xl
"

                                        >

                                            {item.icon}

                                        </div>



                                        <h3 className="
mt-6
text-2xl
font-bold
">

                                            {item.title}

                                        </h3>



                                        <p className="
mt-4
text-gray-500
leading-relaxed
">

                                            {item.description}

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
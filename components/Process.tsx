import FadeIn from "@/components/ui/FadeIn";


const steps=[

    {
        number:"1",
        title:"Напишіть нам",
        text:"Розкажіть вік дитини та ваші цілі."
    },

    {
        number:"2",
        title:"Підберемо напрям",
        text:"Визначимо викладача і формат занять."
    },

    {
        number:"3",
        title:"Починаємо навчання",
        text:"Дитина знайомиться з процесом."
    }

];


export default function Process(){


    return (

        <section

            className="
py-24
bg-[#eef5ff]
"

        >


            <div className="
container
grid
lg:grid-cols-2
gap-8
">


                <FadeIn>


                    <div className="
bg-blue-600
rounded-[40px]
p-10
md:p-14
text-white
overflow-hidden
relative
">


                        <div className="
absolute
w-64
h-64
bg-yellow-400
rounded-full
right-[-80px]
bottom-[-80px]
"
                        />


                        <h2 className="
text-5xl
font-extrabold
relative
">

                            Не знаєте,
                            що обрати?

                        </h2>


                        <p className="
mt-6
text-blue-100
relative
">

                            Ми допоможемо підібрати
                            формат навчання саме
                            для вашої дитини.

                        </p>



                        <div className="
mt-8
space-y-4
relative
">


                            <div>✓ Визначимо цілі</div>

                            <div>✓ Підберемо програму</div>

                            <div>✓ Пояснимо всі деталі</div>


                        </div>


                    </div>


                </FadeIn>




                <div className="
space-y-5
">


                    {

                        steps.map((step,index)=>(


                            <FadeIn

                                key={step.number}

                                delay={index*.15}

                            >


                                <div className="
bg-white
rounded-3xl
p-6
border
border-gray-100
flex
gap-5
items-start
">


                                    <div className="
w-12
h-12
rounded-2xl
bg-blue-50
text-blue-600
font-bold
flex
items-center
justify-center
">

                                        {step.number}

                                    </div>


                                    <div>

                                        <h3 className="
font-bold
text-xl
">

                                            {step.title}

                                        </h3>


                                        <p className="
text-gray-500
mt-2
">

                                            {step.text}

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
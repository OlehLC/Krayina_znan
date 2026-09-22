import { Phone, MapPin } from "lucide-react";
import Image from "next/image";


export default function Footer(){


    return (

        <footer

            className="
bg-[#172033]
text-white
pt-20
"

        >


            <div className="
container
py-12
"


            >


                <div

                    className="
grid
md:grid-cols-3
gap-10
"

                >



                    {/* Brand */}

                    <div>


                        <Image

                            src="/images/logo.PNG"

                            width={100}

                            height={50}

                            alt="Країна знань"

                        />



                        <p

                            className="
mt-5
text-gray-300
leading-relaxed
"

                        >

                            Сучасний освітній центр
                            у Полтаві, де діти
                            навчаються із цікавістю
                            та впевненістю.

                        </p>


                    </div>





                    {/* Links */}

                    <div>


                        <h3

                            className="
font-bold
text-lg
mb-5
"

                        >

                            Напрями

                        </h3>



                        <ul

                            className="
space-y-3
text-gray-300
"

                        >


                            <li>

                                Підготовка до школи

                            </li>


                            <li>

                                Англійська мова

                            </li>


                            <li>

                                Математика

                            </li>


                            <li>

                                Підготовка до НМТ

                            </li>


                            <li>

                                Логопед

                            </li>


                        </ul>


                    </div>





                    {/* Contact */}

                    <div>


                        <h3

                            className="
font-bold
text-lg
mb-5
"

                        >

                            Контакти

                        </h3>



                        <div

                            className="
space-y-4
text-gray-300
"

                        >


                            <a

                                href="tel:+380992738763"

                                className="
flex
items-center
gap-3
hover:text-yellow-400
transition
"

                            >

                                <Phone size={20}/>

                                099 273 87 63

                            </a>



                            <div

                                className="
flex
items-start
gap-3
"

                            >

                                <MapPin size={20}/>


                                <a href="https://maps.app.goo.gl/WozDdqtku6yKh41V9" target="_blank" rel="noopener noreferrer">
                                    <span>Полтава Лікаря Мальцева 4</span>
                                </a>


                            </div>


                        </div>


                    </div>



                </div>





                <div

                    className="
border-t
border-white/10
mt-10
pt-6
text-center
text-gray-400
text-sm
"

                >

                    © 2026 Країна знань. Всі права захищені.

                </div>


            </div>


        </footer>

    )

}
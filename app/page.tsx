import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Teachers from "@/components/Teachers";
import Reviews from "@/components/Reviews";


export default function Home() {

    return (
        <>
            <Header />

            <main>

                <Hero />

                <Services />

                <Benefits />

                <Process />
                <Teachers />

                <Reviews />

                <CTA />

            </main>

            <Footer />

        </>
    );
}
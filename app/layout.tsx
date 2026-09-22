import "./globals.css";

export const metadata = {
    title: "Країна знань | Освітній центр у Полтаві",
    description:
        "Підготовка до школи, англійська мова, математика, НМТ, логопед та індивідуальні заняття у Полтаві.",
    openGraph: {
        title: "Країна знань | Освітній центр у Полтаві",
        description:
            "Сучасний освітній центр для дітей та підлітків.",
        type: "website",
    },
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (

        <html lang="uk">

        <body>

        {children}

        </body>

        </html>

    );

}
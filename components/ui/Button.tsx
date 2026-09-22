export default function Button({
                                   children,
                               }: {
    children: React.ReactNode;
}) {

    return (
        <a
            href="tel:+380992738763"
            className="
        inline-flex
        items-center
        justify-center
        px-7
        py-4
        rounded-2xl
        bg-blue-600
        text-white
        font-bold
        shadow-lg
        shadow-blue-600/20
        transition
        hover:-translate-y-1
        hover:bg-blue-700
      "
        >
            {children}
        </a>
    );
}
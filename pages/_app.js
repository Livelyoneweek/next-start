import NavBar from "@/componenets/NavBar";

export default function App({Component, pageProps}) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    text-decoration: none;
                    color: white;
                }
            `}</style>
        </>
    )
}
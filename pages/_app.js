 import Layout from "@/componenets/layout";
 import "../styles/globals.css";

export default function App({Component, pageProps}) {
    return (
        <Layout> 
            <Component {...pageProps} />
            {/* <style jsx global>{`
                a {
                    text-decoration: none;
                    color: white;
                }
            `}</style> */}
        </Layout>
    )
}
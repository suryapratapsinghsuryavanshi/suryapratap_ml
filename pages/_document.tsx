import { Html, Head, Main, NextScript } from 'next/document'

// the _document page will we used to reander a output as an spesific html structure.
export default function Document() {
    return (
        <Html>
            <Head/>
            <body style={{background: "#fff"}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
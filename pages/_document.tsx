import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head />
            <body className='bg-gray-50 text-black antialiased dark:bg-black dark:text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
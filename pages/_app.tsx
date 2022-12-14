import '../styles/dist.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme='system'>
      <div className="min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full filter blur-xl opacity-70 dark:opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

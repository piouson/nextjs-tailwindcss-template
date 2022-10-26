import Head from 'next/head'
import { appName } from 'src/config'
import { Logo } from 'src/svgs'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Head>
        <title>{appName}</title>
        <meta name="description" content="Template created by Piouson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center py-16 px-0">
        <h1 className="m-0 text-center text-7xl">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-[#0070f3] no-underline hover:underline focus:underline active:underline"
          >
            Next.js!
          </a>
        </h1>
      </main>

      <footer className="flex items-center justify-center border border-[#eaeaea] py-8 px-0 dark:border-[#222]">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          Powered by <Logo aria-label="Vercel" className="ml-2 w-20" />
        </a>
      </footer>
    </div>
  )
}

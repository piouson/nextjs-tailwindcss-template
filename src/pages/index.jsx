import Head from 'next/head'
import { Logo } from 'src/svgs'

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-16 px-0 flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 text-7xl leading-5">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-[#0070f3] no-underline hover:underline focus:underline active:underline"
          >
            Next.js!
          </a>
        </h1>
      </main>

      <footer className="flex justify-center items-center border border-[#eaeaea] py-8 px-0 dark:border-[#222]">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="ml-2 h-4 dark:invert">
            <Logo aria-label="Vercel" className="w-4" />
          </span>
        </a>
      </footer>
    </div>
  )
}

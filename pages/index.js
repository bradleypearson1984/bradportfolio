import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Brad Pearson's Portfolio Page</title>
        <meta name="description" content="Brad Pearson's Portfolio Page, skills and projects by a human man" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1>Home Page</h1>
      </main>
    </>
  )
}

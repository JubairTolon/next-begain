import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Explore</title>
      </Head>
      <Link href="/about">About</Link>
      <h1 className={styles.homepage__title}>HELLO FROM HOME PAGE</h1>
    </div>
  )
}

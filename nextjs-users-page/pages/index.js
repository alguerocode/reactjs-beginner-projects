import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>salah List | Homepage</title>
        <meta content="salah" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage welcome</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita aliquam natus pariatur at blanditiis aspernatur sint harum reprehenderit dolorum alias quos obcaecati similique dicta eius, laudantium suscipit sapiente maxime!</p>
        <Link href="/salah">
          <a className={styles.btn}>See salah Listing</a>
        </Link>
      </div>
    </>
  )
}

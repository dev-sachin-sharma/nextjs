import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Sachin||HomePage</title>
      <metadata name="keywords" content="sachin website"/>
    </Head>
      <div >
        <h1 className={styles.title}>Hey homepage</h1>
        <p className={styles.text}>
          This is homepage data just like lorem to check how it is looking okay
          bye!
        </p>
        <p className={styles.text}>
          This is homepage data just like lorem to check how it is looking okay
          bye!
        </p>
        <p className={styles.text}>
          This is homepage data just like lorem to check how it is looking okay
          bye!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}

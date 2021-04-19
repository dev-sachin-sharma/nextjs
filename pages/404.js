import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Not found</title>
        <metadata name="keywords" content="sachin website" />
      </Head>
      <div className="not-found">
        <h1>Opps........</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to
          <Link href="/">
            <a>HomePage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;

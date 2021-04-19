import Head from "next/head";
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { sachinList: data },
  };
};

const Ninjas = ({ sachinList }) => {
  return (
    <>
      <Head>
        <title>Sachin Listing</title>
        <metadata name="Keywords" content="Ninja list" />
      </Head>
      <h1>All ninjas</h1>
      {sachinList.map((data) => (
        <div key={data.id}>
          <a className={styles.single}>
            <h3>{data.name}</h3>
          </a>
        </div>
      ))}
    </>
  );
};

export default Ninjas;

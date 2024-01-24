import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";

export default function Home() {
  // data from https://jsonplaceholder.typicode.com/users
  
  return (
    <main className={styles.main}>
      <Gallery  />
    </main>
  );
}

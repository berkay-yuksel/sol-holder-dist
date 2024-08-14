import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>  
    <main className={styles.main}>
    


    
      <Link  href={ `/api/top`}> explore top collections</Link>

      <div className={styles.center} ></div>
      <Link  href={ `/api/latest`} > explore all collections</Link>
      

   
    </main>
    <div className={styles.description}>   <a href="https://www.x.com/fomoslunaris"> made by @fomoslunaris</a> </div>

    </div>
  );
}

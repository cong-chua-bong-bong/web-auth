import styles from "./page.module.css";
import Button from "@/components/UI/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <Link href="/login">
          <Button className={styles.signin}>Log In</Button>
        </Link>
        <Link href="/signup">
          <Button className={styles.signup}>Sign Up</Button>
        </Link>
      </div>
      <h1>Welcome to our page!</h1>
      <h3>Explore our products and services to discover the possibilities.</h3>
    </div>
  );
}

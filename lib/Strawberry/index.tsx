import { ReactNode } from "react";
import styles from "./styles.module.css";

interface StrawberryProps {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

export function Strawberry(props: StrawberryProps) {
  return (
    <>
      <div className={styles.root}>
        <header className={styles.header}>{props.header}</header>
        <main className={styles.main}>{props.main}</main>
        <footer>{props.footer}</footer>
      </div>
    </>
  );
}

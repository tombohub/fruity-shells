import { ReactNode } from "react";
import styles from "./styles.module.css";

interface AppleProps {
  header: ReactNode;
  aside: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

export function Apple(props: AppleProps) {
  return (
    <>
      <div className={styles.root}>
        <header className={styles.header}>{props.header}</header>
        <div className={styles.body}>
          <aside>{props.aside}</aside>
          <main className={styles.main}>{props.main}</main>
        </div>
        <footer>{props.footer}</footer>
      </div>
    </>
  );
}

import React from "react";
import Header from "./Header";
import Nav from "../components/Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;

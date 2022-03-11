import Head from "next/head";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyle from "../utils/styles";

export default function Layout({ children }) {
  const classes = useStyle()
  return (
    <div>
      <Head>
        <title>MyCommerce</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>MyCommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next MyCommerce</Typography>
      </footer>
    </div>
  );
}

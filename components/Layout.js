import Head from 'next/head'
import React from 'react'
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>MyCommerce</title>
        </Head>
        <AppBar position="static">
         <Toolbar>
          <Typography>MyCommerce</Typography>
         </Toolbar>
        </AppBar>
        <Container>
        {children}
        </Container>
    </div>
  )
}

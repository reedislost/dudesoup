import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Box, Center, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>dude soup</title>
        <meta name="description" content="dude soup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center minH={"100vh"}>
        <Box fontSize={"5xl"}>dude soup</Box>
      </Center>
    </>
  );
}

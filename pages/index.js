import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <SeoHead title="Box Pay" />
      <Head>
        <title>BoxPay</title>
        <meta name="Send crypto like web2" content="Withdraw Payments" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}

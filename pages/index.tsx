import Head from "next/head";

import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Cypher from "../components/Cypher";
import Assessments from "../components/Assessments";
import DiscordSecurity from "../components/DiscordSecurity";
import Doxxing from "../components/Doxxing";
import Community from "../components/Community";
import Staking from "../components/Staking";
import CypherSeals from "../components/CypherSeals";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Launch from "../components/index/Launch";
import ScrollIcon from "../components/index/ScrollIcon";
import Banner from "../components/index/Banner";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Cypher Seals</title>
        <meta
          name="description"
          content="Web3 brand empowering project teams and investors."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Launch />
      <ScrollIcon />
      <Partners />
      <Cypher />
      <Banner />
      <Assessments />
      <DiscordSecurity />
      <Doxxing />
      <Community />
      <Staking />
      <CypherSeals />
      <Team />
      <FAQ />
    </div>
  );
}

import Head from 'next/head'

import Header from '../components/header'
import Partners from '../components/partners'
import Navigation from '../components/navigation'
import Cypher from '../components/cypher'
import Assessments from '../components/assessments'
import DiscordSecurity from '../components/discord-security'
import Doxxing from '../components/doxxing'
import Pricing from '../components/pricing'
import Community from '../components/community'
import Staking from '../components/staking'
import CypherSeals from '../components/cypherseals'
import Team from '../components/team'
import FAQ from '../components/faq'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Cypher Seals</title>
        <meta name="description" content="Web3 brand empowering project teams and investors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Partners />
      <Navigation />
      <Cypher />
      <Assessments />
      <DiscordSecurity />
      <Doxxing />
      <Pricing />
      <Community />
      <Staking />
      <CypherSeals />
      <Team />
      <FAQ />
    </div> 
    
  )
}
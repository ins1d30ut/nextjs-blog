import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Cocksuckers</title>
      </Head>
      <div style={{ backgroundColor: '#f0f0f0', height: '100vh'}}>
        
      <section className={utilStyles.headingMd}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
          <a href="https://pump.fun/wa2NP6wdUitth7Ym4pC4dj1WLHMe4ZixjayoSQ9pump" style={{ color: 'blue', fontSize: '32px' }}>Pump.Fun</a>
        </div>
        <h2 style={{ color: 'black', fontSize: '22px' }}>CA = wa2NP6wdUitth7Ym4pC4dj1WLHMe4ZixjayoSQ9pump</h2>
        <p style={{ color: 'black', fontSize: '20px' }}>
          Cocksuckers is a unique memecoin built on the Solana blockchain, driven by a bold and irreverent theme. The project taps into a universal experience: everyone knows someone they don’t particularly like, often referred to with a not-so-flattering term—“cocksucker.” 
        </p>
        <img src="/images/10.png" alt="Cocksuckers" />
<p>
  This memecoin leverages humor and the shared sentiment of dealing with difficult people, making it both a community-driven and highly relatable digital asset. Whether it’s a lighthearted jab at a frustrating colleague, an exasperating neighbor, or that one friend who always tests your patience, Cocksuckers aims to create a space where people can unite over this common experience.
</p>
<img src="/images/4.png" alt="Cocksuckers" style={{ width: '100%', height: 'auto', padding: '10px'}} />
<p>
  The project is designed to be fun and engaging, with a strong emphasis on community interaction. Holders of the Cocksuckers coin can expect a platform filled with memes, merchandise, and events that embrace the tongue-in-cheek nature of the coin. It’s more than just a memecoin; it’s a way to vent frustrations, share laughs, and connect with others who understand the sentiment.
</p>
<img src="/images/5.png" alt="Cocksuckers" />
<p>
  By using the fast and low-cost Solana network, Cocksuckers also ensures efficient transactions and scalability, making it easy for users to participate and trade. The project plans to expand its ecosystem with community-driven initiatives, special edition NFTs, and potential partnerships, all while maintaining its irreverent and unapologetic brand identity.
</p>
<img src="/images/6.png" alt="Cocksuckers" style={{ width: '100%', height: 'auto', padding: '10px'}} />

      </section>
</div>

    </Layout>
  );
}



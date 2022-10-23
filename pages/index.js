import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
<link rel="icon" href="/favicon.png" />
export default function Home() {
  const lp="/LAXMI_PUJA_2022.pdf"
  return (
    <div >
      <Head>
        <title>JYS</title>
        <meta name="description" content="JHAPRA YOUTH SPORTING" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1  style={{color:'blue', justifyContent:'center',display:'flex'}}><b> Welcome to Jys</b></h1>
        <br/>
        <Link href={lp} ><a><h2  style={{color:'limegreen', justifyContent:'center',display:'flex'}}><b>Laxmi Puja 2022</b></h2></a></Link>
      </main>
    </div>
  )
}

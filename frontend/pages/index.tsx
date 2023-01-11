import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-[800px] my-10 mx-auto'>
        <h2 className='text-3xl font-semibold '>Create your controller</h2>
        <Form />
        {/* <h1 clas
        <Form /> */}
      </main>
        
    </div>
  )
}
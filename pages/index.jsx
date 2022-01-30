import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>

      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          reiciendis animi odio architecto numquam culpa quis ut quasi illo
          aspernatur, id unde laboriosam laborum omnis ad dolorem explicabo
          optio amet. Quia omnis pariatur error fugit fuga laborum doloribus qui
          aliquam enim earum perspiciatis deserunt veritatis, doloremque
          molestiae recusandae tempore illum iure ratione soluta atque? Nisi
          doloremque nobis iure laudantium doloribus culpa illo? Odio, qui
          reprehenderit ratione assumenda id mollitia dolorem?
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laboriosam ullam, dolorum voluptate itaque quo soluta maiores id
          doloribus dignissimos ipsum enim iste ut dolores minima vero harum
          doloremque reiciendis esse, non provident architecto veritatis totam
          magni! Facilis nisi est earum cum explicabo vitae, necessitatibus
          accusantium quo mollitia laudantium deserunt temporibus ab suscipit
          numquam itaque accusamus blanditiis amet sequi aliquid impedit
          adipisci inventore ipsa libero labore? Adipisci fugit sunt architecto
          nemo ullam hic repellendus ipsum harum, magni at excepturi consectetur
          corrupti exercitationem. Aliquid, non tempora, autem assumenda
          exercitationem rem aut, eius corrupti sequi similique dicta sapiente!
          Nisi consectetur eos eaque?
        </p>

        <Link href='/ninjas' className={styles.btn}>
          See Ninja List
        </Link>
      </div>
    </>
  )
}

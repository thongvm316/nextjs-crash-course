import { Provider } from 'next-auth/client'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </Provider>
  )
}

/* 
   session={pageProps.session}: When use getServerSideProps and return session into props and pass it to Provider as props in other to prevent flig in Navbar.js (not call useSession many times for better performance and UX, always in state loaded and just call one time).

*/

export default MyApp
